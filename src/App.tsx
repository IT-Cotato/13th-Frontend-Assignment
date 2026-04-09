import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공식문서 읽기", completed: true },
    { id: 2, text: "알고리즘 문제 풀기", completed: true },
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
    { id: 5, text: "장보기", completed: false },
  ]);
  const [inputValue, setInputValue] = useState<string>("");

  const weekLabel = "week4";
    

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue.trim(), completed: false },
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

  return (
    <div className="app">
      <div className="container">
        <p className="week-label">{weekLabel}</p>
        <TodoHeader icon="✅" title="오늘의 할 일" />
        <TodoList
          items={todos}
          inputValue={inputValue}
          onInputChange={setInputValue}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
}