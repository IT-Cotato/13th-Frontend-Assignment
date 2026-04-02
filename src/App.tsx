import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import { useState } from "react";
import type { Todo } from "./types/todo.types";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input.trim(), isDone: false }]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>

      <div>
        <InputTodo input={input} setInput={setInput} onAdd={handleAdd} />
      </div>

      <div className="container">
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>

      <div className="frame2">
        <TodoHeader />
      </div>

      <div>
        <InputTodo input={input} setInput={setInput} onAdd={handleAdd} />
      </div>

      <div className="container">
        <TodoList todos={[]} onDelete={() => {}} />
      </div>
    </div>
  );
}

export default App;