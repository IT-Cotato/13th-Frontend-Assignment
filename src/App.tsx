import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoOverview from './components/TodoOverview'
import TodoCategorySelector from './components/TodoCategorySelector'
import TodoFilter from './components/TodoFilter'
import type { Category, FilterCategory } from './types/todo';
import { todoData } from './data/TodoData'
import { useReducer, useState } from 'react';

type TodoAction =
| { type: "ADD"; text: string; category: Category }
| { type: "TOGGLE"; id: number }
| { type: "DELETE"; id: number }
| { type: "UPDATE"; id: number; newText: string };

function todoReducer(state: typeof todoData, action: TodoAction) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          todo: action.text,
          isCompleted: false,
          category: action.category,
        },
      ];

    case "TOGGLE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );

    case "DELETE":
      return state.filter((item) => item.id !== action.id);

    case "UPDATE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, todo: action.newText }
          : item
      );

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, todoData);
  const [ selectedCategory, setSelectedCategory ] = useState<Category>("공부");
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<FilterCategory>("전체");
  const [searchText, setSearchText] = useState("");

  const isFiltered =
  searchText.trim() !== "" || selectedFilterCategory !== "전체";

  const filteredTodos = todos.filter((todo) => {
  const matchCategory =
    selectedFilterCategory === "전체" ||
    todo.category === selectedFilterCategory;

  const matchSearch = todo.todo
    .toLowerCase()
    .includes(searchText.toLowerCase());

  return matchCategory && matchSearch;
});

  function handleAddTodo(text: string) {
    dispatch({
      type: "ADD",
      text,
      category: selectedCategory,
    });
  }

  function handleToggle(id: number) {
    dispatch({
      type: "TOGGLE",
      id,
    });
  }

  function handleDelete(id: number) {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  function handleUpdate(id: number, newText: string) {
    dispatch({
      type: "UPDATE",
      id,
      newText,
    });
  }

  return (
    <div className="flex min-h-screen w-full items-start bg-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-start gap-[24px]">
        <TodoHeader />
        <TodoOverview todos={todos} />
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoCategorySelector selectedCategory={selectedCategory} onChangeCategory={setSelectedCategory}/>
        <TodoFilter searchText={searchText} onChangeSearchText={setSearchText} selectedFilterCategory={selectedFilterCategory} onChangeFilterCategory={setSelectedFilterCategory}/>
        <TodoList todos={filteredTodos} isFiltered={isFiltered} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}

export default App