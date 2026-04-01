import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공식문서 읽기", completed: true },
    { id: 2, text: "알고리즘 문제 풀기", completed: true },
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
  ]);

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="flex flex-col items-start gap-5">
        <TodoHeader icon={icon} title={title} />
        <TodoList todos={todos} onToggle={handleToggleTodo} />
      </div>
    </div>
  );
}

export default App;
