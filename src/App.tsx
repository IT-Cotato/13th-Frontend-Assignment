import { useMemo, useReducer } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import type { Todo, TodoCategory } from "./types/todo";
import type { FilterCategory } from "./constants/categories";

type TodoState = {
  todos: Todo[];
  inputValue: string;
  selectedCategory: TodoCategory;
  editingId: number | null;
  editingText: string;
  searchKeyword: string;
  filterCategory: FilterCategory;
};

type TodoAction =
  | { type: "CHANGE_INPUT"; payload: string }
  | { type: "CHANGE_SELECTED_CATEGORY"; payload: TodoCategory }
  | { type: "ADD_TODO" }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "START_EDIT"; payload: number }
  | { type: "CHANGE_EDITING_TEXT"; payload: string }
  | { type: "SAVE_EDIT"; payload: number }
  | { type: "CANCEL_EDIT" }
  | { type: "CHANGE_SEARCH_KEYWORD"; payload: string }
  | { type: "CHANGE_FILTER_CATEGORY"; payload: FilterCategory };

const initialState: TodoState = {
  todos: [
    { id: 1, text: "리액트 공식문서 읽기", completed: true, category: "공부" },
    { id: 2, text: "알고리즘 문제 풀기", completed: true, category: "공부" },
    { id: 3, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 4, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 5, text: "장보기 하기", completed: false, category: "개인" },
    { id: 6, text: "블로그 포스팅 작성", completed: false, category: "업무" },
  ],
  inputValue: "",
  selectedCategory: "공부",
  editingId: null,
  editingText: "",
  searchKeyword: "",
  filterCategory: "전체",
};

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputValue: action.payload,
      };

    case "CHANGE_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };

    case "ADD_TODO": {
      const trimmedValue = state.inputValue.trim();

      if (!trimmedValue) {
        return state;
      }

      const newTodo: Todo = {
        id: Date.now(),
        text: trimmedValue,
        completed: false,
        category: state.selectedCategory,
      };

      return {
        ...state,
        todos: [newTodo, ...state.todos],
        inputValue: "",
      };
    }

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        editingId: state.editingId === action.payload ? null : state.editingId,
        editingText:
          state.editingId === action.payload ? "" : state.editingText,
      };

    case "START_EDIT": {
      const targetTodo = state.todos.find((todo) => todo.id === action.payload);

      if (!targetTodo) {
        return state;
      }

      return {
        ...state,
        editingId: action.payload,
        editingText: targetTodo.text,
      };
    }

    case "CHANGE_EDITING_TEXT":
      return {
        ...state,
        editingText: action.payload,
      };

    case "SAVE_EDIT": {
      const trimmedText = state.editingText.trim();

      if (!trimmedText) {
        return state;
      }

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, text: trimmedText } : todo,
        ),
        editingId: null,
        editingText: "",
      };
    }

    case "CANCEL_EDIT":
      return {
        ...state,
        editingId: null,
        editingText: "",
      };

    case "CHANGE_SEARCH_KEYWORD":
      return {
        ...state,
        searchKeyword: action.payload,
      };

    case "CHANGE_FILTER_CATEGORY":
      return {
        ...state,
        filterCategory: action.payload,
      };

    default:
      return state;
  }
}

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) => {
      const matchesKeyword = todo.text
        .toLowerCase()
        .includes(state.searchKeyword.toLowerCase());

      const matchesCategory =
        state.filterCategory === "전체"
          ? true
          : todo.category === state.filterCategory;

      return matchesKeyword && matchesCategory;
    });
  }, [state.todos, state.searchKeyword, state.filterCategory]);

  const visibleTodos = filteredTodos;

  const emptyMessage =
    state.todos.length === 0 ? "아직 할 일이 없어요" : "검색 결과가 없습니다";

  const totalCount = state.todos.length;
  const completedCount = state.todos.filter((todo) => todo.completed).length;
  const inCompleteCount = totalCount - completedCount;

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="flex w-full max-w-[640px] flex-col items-start gap-5">
        <TodoHeader icon={icon} title={title} />

        <TodoCounter
          totalCount={totalCount}
          completedCount={completedCount}
          inCompleteCount={inCompleteCount}
        />

        <TodoInput
          value={state.inputValue}
          selectedCategory={state.selectedCategory}
          onChange={(value) =>
            dispatch({ type: "CHANGE_INPUT", payload: value })
          }
          onChangeCategory={(category) =>
            dispatch({ type: "CHANGE_SELECTED_CATEGORY", payload: category })
          }
          onAdd={() => dispatch({ type: "ADD_TODO" })}
        />

        <TodoSearch
          keyword={state.searchKeyword}
          selectedCategory={state.filterCategory}
          onChangeKeyword={(value) =>
            dispatch({ type: "CHANGE_SEARCH_KEYWORD", payload: value })
          }
          onChangeCategory={(category) =>
            dispatch({ type: "CHANGE_FILTER_CATEGORY", payload: category })
          }
        />

        <TodoList
          todos={visibleTodos}
          emptyMessage={emptyMessage}
          editingId={state.editingId}
          editingText={state.editingText}
          onToggle={(id) => dispatch({ type: "TOGGLE_TODO", payload: id })}
          onDelete={(id) => dispatch({ type: "DELETE_TODO", payload: id })}
          onStartEdit={(id) => dispatch({ type: "START_EDIT", payload: id })}
          onChangeEditingText={(value) =>
            dispatch({ type: "CHANGE_EDITING_TEXT", payload: value })
          }
          onSaveEdit={(id) => dispatch({ type: "SAVE_EDIT", payload: id })}
          onCancelEdit={() => dispatch({ type: "CANCEL_EDIT" })}
        />
      </div>
    </div>
  );
}

export default App;
