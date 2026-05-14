import { useState } from "react";
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

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공식문서 읽기", completed: true,  category: "공부" },
    { id: 2, text: "알고리즘 문제 풀기", completed: true,  category: "공부" },
    { id: 3, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 4, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 5, text: "장보기", completed: false, category: "개인" },
    { id: 6, text: "블로그 포스팅 작성", completed: false, category: "업무" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [inputCategory, setInputCategory] = useState<Category>("공부");

  // 편집 관련 state
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  // 검색/필터 관련 state
  const [searchValue, setSearchValue] = useState("");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("전체");

  const weekLabel = "week6";

  // 검색어 + 카테고리 조건 동시 적용
  const filteredTodos = todos
    .filter((todo) => filterCategory === "전체" || todo.category === filterCategory)
    .filter((todo) => todo.text.includes(searchValue.trim()));

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue.trim(), completed: false, category: inputCategory },
    ]);
    setInputValue("");
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
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
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo
      )
    );
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