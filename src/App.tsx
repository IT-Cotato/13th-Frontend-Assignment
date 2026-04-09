import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import { useState } from "react";
import type { Todo } from "./types/todo.types";
import Summary from "./Summary";

function App() {
  // 오늘의 할 일
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");

  // 추가
  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: input.trim(), isDone: false },
    ]);
    setInput("");
  };

  // 삭제
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
//토글
  const handleToggle = (id: number) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>
      <Summary todos={todos} />

      <InputTodo
        input={input}
        setInput={setInput}
        onAdd={handleAdd}
        placeholder="할 일을 입력하세요"
      />

      <div className="container">
        <TodoList 
          todos={todos} 
          onDelete={handleDelete} 
          onToggle={handleToggle} 
        />
      </div>
    </div>
  );
}

export default App;