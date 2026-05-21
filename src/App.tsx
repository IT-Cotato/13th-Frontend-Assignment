import { useState } from "react";
import type Todo from "./types/todo";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import "./App.css";
import TodoSearch from "./TodoSearch";
import TodoFilter, { type FilterCategory } from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoEmptyState from "./TodoEmptyState";

const fixedTodos: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", isCompleted: true, category: "공부" },
  { id: 2, text: "알고리즘 문제 풀기", isCompleted: true, category: "공부" },
  { id: 3, text: "운동 30분 하기", isCompleted: false, category: "운동" },
  { id: 4, text: "프로젝트 회의 준비", isCompleted: false, category: "업무" },
  { id: 5, text: "장보기 하기", isCompleted: false, category: "개인" },
  { id: 6, text: "블로그 포스팅 작성", isCompleted: false, category: "업무" },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(fixedTodos);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Todo["category"]>("공부");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("전체");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      isCompleted: false,
      category: selectedCategory,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setInputValue("");
    setSelectedCategory("공부");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const handleEditStart = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleEditSave = (id: number) => {
    if (editingText.trim() === "") return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText.trim() } : todo,
      ),
    );

    setEditingId(null);
    setEditingText("");
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditingText("");
  };

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const incompleteCount = totalCount - completedCount;

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      filterCategory === "전체" || todo.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader
          totalCount={totalCount}
          completedCount={completedCount}
          incompleteCount={incompleteCount}
        />
      </div>
      <TodoInput
        inputValue={inputValue}
        selectedCategory={selectedCategory}
        onInputChange={setInputValue}
        onCategoryChange={setSelectedCategory}
        onSubmit={handleAddTodo}
      />
      <hr className="divider" />
      <TodoSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <TodoFilter
        filterCategory={filterCategory}
        onFilterChange={setFilterCategory}
      />
      <div className="container">
        {todos.length === 0 ? (
          <TodoEmptyState icon="📋" message="아직 할 일이 없어요" />
        ) : filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            editingId={editingId}
            editingText={editingText}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
            onEditStart={handleEditStart}
            onEditSave={handleEditSave}
            onEditCancel={handleEditCancel}
            onEditTextChange={setEditingText}
          />
        ) : (
          <TodoEmptyState icon="🔍" message="검색 결과가 없습니다." />
        )}
      </div>
    </div>
  );
}

export default App;
