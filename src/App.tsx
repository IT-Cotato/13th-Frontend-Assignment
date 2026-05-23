import { useState, useReducer } from "react";
import type { Category } from "./components/TodoCard";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
}

type FilterCategory = Category | "전체";

type TodoAction =
  | { type: "ADD";    payload: { text: string; category: Category } }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "TOGGLE"; payload: { id: number } }
  | { type: "EDIT";   payload: { id: number; text: string } };

function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, completed: false, category: action.payload.category },
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    default:
      return state;
  }
}

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", completed: true,  category: "공부" },
  { id: 2, text: "알고리즘 문제 풀기",   completed: true,  category: "공부" },
  { id: 3, text: "운동 30분 하기",       completed: false, category: "운동" },
  { id: 4, text: "프로젝트 회의 준비",   completed: false, category: "업무" },
  { id: 5, text: "장보기",               completed: false, category: "개인" },
  { id: 6, text: "블로그 포스팅 작성",   completed: false, category: "업무" },
];

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_TODOS);
  const [inputValue, setInputValue] = useState("");
  const [inputCategory, setInputCategory] = useState<Category>("공부");

  // 편집 관련 state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  // 검색/필터 관련 state
  const [searchValue, setSearchValue] = useState("");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("전체");

  const weekLabel = "week7";

  const filteredTodos = todos
    .filter((todo) => filterCategory === "전체" || todo.category === filterCategory)
    .filter((todo) => todo.text.includes(searchValue.trim()));

  // dispatch로 action 전달
  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    dispatch({ type: "ADD", payload: { text: inputValue.trim(), category: inputCategory } });
    setInputValue("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  const handleEditStart = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleEditChange = (value: string) => {
    setEditingText(value);
  };

  const handleEditSave = (id: number) => {
    if (editingText.trim() === "") return;
    dispatch({ type: "EDIT", payload: { id, text: editingText.trim() } });
    setEditingId(null);
    setEditingText("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="app">
      <div className="container">
        <p className="week-label">{weekLabel}</p>
        <TodoHeader icon="✅" title="오늘의 할 일" />
        <TodoList
          items={filteredTodos}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onToggle={handleToggle}
          inputCategory={inputCategory}
          onCategoryChange={setInputCategory}
          editingId={editingId}
          editingText={editingText}
          onEditStart={handleEditStart}
          onEditChange={handleEditChange}
          onEditSave={handleEditSave}
          onEditCancel={handleEditCancel}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          filterCategory={filterCategory}
          onFilterCategoryChange={setFilterCategory}
        />
      </div>
    </div>
  );
}