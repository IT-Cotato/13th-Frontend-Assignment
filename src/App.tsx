import { useState } from "react";
import "./App.css";
import  TodoHeader  from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  const [todos, setTodos] = useState([
    { id: 0, text: "리액트 공식문서 읽기", completed: true},
    { id: 1, text: "알고리즘 문제 풀기", completed: true},
    { id: 2, text: "운동 30분 하기", completed: false},
    { id: 3, text: "프로젝트 회의 준비", completed: false},
    { id: 4, text: "장보기 하기", completed: false}
  ]);

  function deleteTodo(id: number) {
    const result = [];

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id !== id) {
        result.push(todos[i]);
      }
    }

    setTodos(result); 
  }

  return (
    <>
      <div className="container">
        <TodoHeader />
        <TodoInput todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} onDelete={deleteTodo}/>
        
      </div>
    </>
  );
}

export default App; // 기본 내보내기
