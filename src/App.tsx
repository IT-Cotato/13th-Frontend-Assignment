import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "리액트 공식문서 읽기", completed: true },
    { id: 1, text: "알고리즘 문제 풀기", completed: true },
    { id: 2, text: "운동 30분 하기", completed: false },
    { id: 3, text: "프로젝트 회의 준비", completed: false },
    { id: 4, text: "장보기 하기", completed: false },
  ]);

  const completedTodos = todos.filter((todo) => todo.completed === true);

  const uncompletedTodos = todos.filter((todo) => todo.completed === false);

  const handleAddTodo = (newTodoText: string) => {
    const newIndex = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const newTodo = {
      id: newIndex,
      text: newTodoText,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (dleletedId: number) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== dleletedId));
  };

  const handleCompletedStatus = (targetId: number) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <>
      <div className="container">
        <TodoHeader />
        <TodoCounter
          totalCount={todos.length}
          completedCount={completedTodos.length}
          uncompletedCount={uncompletedTodos.length}
        />
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} handleCompletedStatus={handleCompletedStatus} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App; // 기본 내보내기
