import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const [inputValue, setInputValue] = useState<string>("새로운 할 일");

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "운동 30분 하기", completed: false },
    { id: 2, text: "프로젝트 회의 준비", completed: false },
  ]);

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedValue,
      completed: false,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="flex flex-col items-start gap-5">
        <TodoHeader icon={icon} title={title} />
        <TodoInput
          value={inputValue}
          onChange={setInputValue}
          onAdd={handleAddTodo}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
