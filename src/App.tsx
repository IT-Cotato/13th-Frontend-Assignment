import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import { useState } from "react";
import type { Todo } from "./types/todo.types";

function App() {
  // 1번 오늘의 할 일
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");

  // 2번 오늘의 할 일
  const [focusTodos, setFocusTodos] = useState<Todo[]>([]);
  const [focusInput, setFocusInput] = useState("");

  // 1번 추가
  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), isDone: false },
    ]);
    setInput("");
  };

  // 2번 추가
  const handleAddFocus = () => {
    if (focusInput.trim() === "") return;
    setFocusTodos([
      ...focusTodos,
      { id: Date.now(), text: focusInput.trim(), isDone: false },
    ]);
    setFocusInput("");
  };

  // 1번 삭제
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 2번 삭제
  const handleDeleteFocus = (id: number) => {
    setFocusTodos(focusTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>

      <InputTodo
        input={input}
        setInput={setInput}
        onAdd={handleAdd}
        placeholder="할 일을 입력하세요"
      />

      <div className="container">
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>

      <div className="frame2">
        <TodoHeader />
      </div>

      <InputTodo
        input={focusInput}
        setInput={setFocusInput}
        onAdd={handleAddFocus}
        placeholder="새로운 할 일"
      />

      <div className="container">
        <TodoList todos={focusTodos} onDelete={handleDeleteFocus} />
      </div>
    </div>
  );
}

export default App;