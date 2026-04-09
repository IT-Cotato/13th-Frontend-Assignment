import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공식문서 읽기", completed: true },
    { id: 2, text: "알고리즘 문제 풀기", completed: true },
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
    { id: 5, text: "장보기 하기", completed: false },
  ]);
  
  const [isFocused, setIsFocused] = useState(false);

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="app-layout">
      <div className="todo-container">
        <div className="section">
          
          {isFocused && (
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0' }}>
              Week 3 — 입력 중 (Focus)
            </p>
          )}

          {/* ✅ 핵심 포인트: TodoHeader에 todos 데이터를 꼭 넘겨주어야 합니다! */}
          <TodoHeader todos={todos} />
          
          <div className="todo-input-container">
            <input 
              type="text" 
              className={`todo-input ${isFocused ? 'focused-input' : ''}`}
              placeholder="할 일을 입력하세요" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button className="todo-submit-btn" onClick={handleAdd}>
              추가
            </button>
          </div>

          <TodoList 
            todos={todos} 
            onDelete={handleDelete} 
            onToggle={handleToggle} 
          />
          
        </div>
      </div>
    </div>
  );
};

export default App;