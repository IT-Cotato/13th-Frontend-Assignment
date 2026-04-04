// src/App.tsx
import { useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 🌟 데이터의 원본은 오직 이것 하나뿐입니다! (하드코딩 중복 제거)
const INITIAL_TODOS: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", completed: true },
  { id: 2, text: "알고리즘 문제 풀기", completed: true },
  { id: 3, text: "운동 30분 하기", completed: false },
  { id: 4, text: "프로젝트 회의 준비", completed: false },
  { id: 5, text: "장보기 하기", completed: false },
];

function TodoSection({ subtitle, initialInput, isFocused, initialTodos }: { subtitle: string, initialInput: string, isFocused: boolean, initialTodos: Todo[] }) {
  
  const [inputText, setInputText] = useState(initialInput);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    // 빈 문자열 방지 (경고창 유지)
    if (inputText.trim() === '') {
      alert("할 일을 입력해주세요!");
      return; 
    }
    
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="demo-section">
      <header className="todo-header">
        <p className="subtitle">{subtitle}</p>
        <h1 className="title">✅ 오늘의 할 일</h1>
      </header>

      <div className="input-section">
        <input
          type="text"
          className={`todo-input ${isFocused ? 'focused' : ''}`}
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTodo}>
          추가
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-card ${todo.completed ? 'done-card' : ''}`}>
            
            <div className="card-left">
              <div className={`checkbox-container ${todo.completed ? 'checked' : 'unchecked'}`}>
                {todo.completed && (
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={`task-text ${todo.completed ? 'done-text' : ''}`}>
                {todo.text}
              </span>
            </div>

            <button className="delete-button" onClick={() => handleDeleteTodo(todo.id)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#9CA3AF"/>
              </svg>
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      {/* 1) 기본 상태: 원본 배열(5개)을 그대로 전달합니다. */}
      <TodoSection 
        subtitle="Week 3 — 기본 상태" 
        initialInput="" 
        isFocused={false} 
        initialTodos={INITIAL_TODOS} 
      />

      {/* 🌟 2) 포커스 상태: 효주님의 로직대로 원본 배열에서 completed가 false인 것만 걸러서(filter) 전달합니다! */}
      <TodoSection 
        subtitle="Week 3 — 포커스 상태" 
        initialInput="새로운 할 일" 
        isFocused={true} 
        initialTodos={INITIAL_TODOS.filter(todo => todo.completed === false)} 
      />
    </div>
  );
}

export default App;