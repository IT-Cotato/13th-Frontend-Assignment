// src/App.tsx
import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <div className="todo-container">
        <TodoHeader />
        <TodoList />
      </div>
    </div>
  );
}

export default App;