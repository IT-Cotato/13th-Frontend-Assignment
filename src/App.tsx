// import { useState } from 'react'

import "./App.css";
import { TodoHeader } from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {

  return (
    <>
      <div className="container">
        <TodoHeader />
        <TodoList />
        
      </div>
    </>
  );
}

export default App; // 기본 내보내기
