import { useReducer, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import TodoCategory from "./components/TodoCategory";
import Search from "./components/Search";
import todoReducer from "./reducers/todoReducer";
import { initialTodos } from "./data/initialTodos";
import type {
  FilterCategory,
  TodoCategory as TodoCategoryType,
} from "./types/todo";
import ViewModeToggleButton from "./components/ViewModeToggleButton";
import TodoSortDropdown from "./components/TodoSortDropdown";
import HideCompletedToggleButton from "./components/HideCompletedToggleButton";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const [selectedInputCategory, setSelectedInputCategory] =
    useState<TodoCategoryType>("공부");
  const [selectedSearchCategory, setSelectedSearchCategory] =
    useState<FilterCategory>("전체");

  const [searchText, setSearchText] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true);

  const incompletedTodos = todos.filter((todo) => todo.completed === false);

  const [sortOrder, setSortOrder] = useState<"생성순" | "완료순" | "이름순">(
    "생성순",
  );

  const [viewMode, setViewMode] = useState<"List" | "Grid">("List");

  const [hide, setHide] = useState(false);

  const handleAddTodo = (newTodoText: string) => {
    const trimmedText = newTodoText.trim(); // 앞뒤 공백을 제거한 텍스트를 저장

    if (trimmedText.length === 0) {
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: { text: trimmedText, category: selectedInputCategory },
    });
  };

  const handleUpdateTodo = (updatedId: number, updatedText: string) => {
    const trimmedText = updatedText.trim();

    if (trimmedText.length === 0) {
      return;
    }

    dispatch({
      type: "UPDATE_TODO",
      payload: { id: updatedId, text: trimmedText },
    });
  };

  const handleDeleteTodo = (deletedId: number) => {
    dispatch({ type: "DELETE_TODO", payload: { id: deletedId } });
  };

  const handleCompletedStatus = (targetId: number) => {
    dispatch({ type: "COMPLETE_TODO", payload: { id: targetId } });
  };

  // const filterTodos = todos.filter(
  //   (todo) =>
  //     todo.text.includes(searchText) &&
  //     (selectedSearchCategory === "전체" ||
  //       todo.category === selectedSearchCategory),
  // );

  const filterTodos = () => {
    return todos.filter((todo) => {
      const matchedTodo = todo.text.includes(searchText);
      const matchedCategory = selectedSearchCategory === "전체" || todo.category === selectedSearchCategory;
      const matchedHide = hide ? !todo.completed : true;
      
      return matchedTodo && matchedCategory && matchedHide;
    })
  }

  const sortedTodos = [...filterTodos()].sort((a, b) => {
    if (sortOrder === "완료순") {
      return Number(a.completed) - Number(b.completed);
    } else if (sortOrder === "이름순") {
      return a.text.localeCompare(b.text);
    } else {
      return b.id - a.id;
    }
  });

  const handleViewMode = (mode: "List" | "Grid") => {
    setViewMode(mode);
  };

  const handleHideMode = (hide: boolean) => {
    setHide(() => !hide);
  };

  return (
    <>
      <div className="todoContainer">
        <TodoHeader />
        <TodoCounter
          totalCount={todos.length}
          completedCount={completedTodos.length}
          incompletedCount={incompletedTodos.length}
        />
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoCategory
          isShowAll={false}
          selected={selectedInputCategory}
          onSelect={(value) =>
            setSelectedInputCategory(value as TodoCategoryType)
          }
          name="input"
        />
        <hr className="border-[rgba(229,231,235,1)]" />
        <Search searchText={searchText} onSearchChange={setSearchText} />
        <div className="flex items-end justify-between">
          <TodoCategory
            isShowAll={true}
            selected={selectedSearchCategory}
            onSelect={(value) =>
              setSelectedSearchCategory(value as FilterCategory)
            }
            name="search"
          />
          <ViewModeToggleButton handleViewMode={handleViewMode} />
        </div>
        <div className="flex items-center justify-between">
          <TodoSortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
          <HideCompletedToggleButton hide={hide} handleHideMode={handleHideMode} />
        </div>
        <TodoList
          todos={sortedTodos}
          searchText={searchText}
          handleCompletedStatus={handleCompletedStatus}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          viewMode={viewMode}
        />
      </div>
    </>
  );
}

export default App; // 기본 내보내기
