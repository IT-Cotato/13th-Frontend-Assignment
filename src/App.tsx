import TodoEmpty from "./component/TodoEmpty"
import TodoHeader from "./component/TodoHeader"
import TodoList from "./component/TodoList"
import TodoInput from "./component/TodoInput"
import { useState } from "react";

interface TodoItem {
  id: number;
  content: string;
  isDone: boolean;
}


function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, content: "리액트 공식문서 읽기", isDone: true },
    { id: 2, content: "알고리즘 문제 풀기", isDone: true },
    { id: 3, content: "운동 30분 하기", isDone: false },
    { id: 4, content: "프로젝트 회의 준비", isDone: false },
    { id: 5, content: "장보기 하기", isDone: false },
  ]);

  const handleAdd = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      content: text,
      isDone: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
    <div className="flex flex-col w-[640px] mt-[80px] ml-[445px] mr-[464px] gap-[22px]">
      <TodoHeader />
      <TodoInput onAdd={handleAdd} />
      {todos.length > 0 ? (
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      ) : (
        <TodoEmpty />
      )}
    </div>
    </>
    
  )
}

export default App
