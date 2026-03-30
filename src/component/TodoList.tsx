import { useState } from "react";
import TodoCard from "./TodoCard";
import TodoEmpty from "./TodoEmpty";
 
interface TodoItem {
  id: number;
  content: string;
  isDone: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, content: "리액트 공식문서 읽기", isDone: true },
    { id: 2, content: "알고리즘 문제 풀기", isDone: true },
    { id: 3, content: "운동 30분 하기", isDone: false },
    { id: 4, content: "프로젝트 회의 준비", isDone: false },
  ]);

  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  if (todos.length === 0) {
    return <TodoEmpty />;
  }

  return (
    <ul className="flex flex-col items-start gap-4 self-stretch">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}
          content={todo.content} 
          checked={todo.isDone}
          onToggle={() => handleToggle(todo.id)}
        />
      ))}
    </ul>
  )
}