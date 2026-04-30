import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import { useState } from "react";
import type { Todo } from "./types/todo.types";
import Summary from "./Summary";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("공부");

  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        category,
      },
    ]);

    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
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
        category={category}
        setCategory={setCategory}
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