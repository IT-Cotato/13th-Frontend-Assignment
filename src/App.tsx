// src/App.tsx
import { useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}


const INITIAL_TODOS: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", completed: true },
  { id: 2, text: "알고리즘 문제 풀기", completed: true },
  { id: 3, text: "운동 30분 하기", completed: false },
  { id: 4, text: "프로젝트 회의 준비", completed: false },
  { id: 5, text: "장보기 하기", completed: false },
  { id: 6, text: "블로그 포스팅 작성", completed: false }, 
];



function TodoStats({ todos }: { todos: Todo[] }) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;

  return (
    <div className="stats-card">
      <span>전체 <strong className="text-black">{total}</strong>개</span>
      <span className="divider"></span>
      <span>완료 <strong className="text-green">{completed}</strong>개</span>
      <span className="divider"></span>
      <span>미완료 <strong className="text-blue">{active}</strong>개</span>
    </div>
  );
}



function TodoInput({ onAdd, initialInput, isFocused }: { onAdd: (text: string) => void, initialInput: string, isFocused: boolean }) {
  const [inputText, setInputText] = useState(initialInput);

  const handleAdd = () => {
    if (inputText.trim() === '') return alert("할 일을 입력해주세요!");
    onAdd(inputText);
    setInputText("");
  };

  return (
    <div className="input-row">
      <input
        type="text"
        className={`todo-input ${isFocused ? 'focused' : ''}`}
        placeholder="할 일을 입력하세요"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-button" onClick={handleAdd}>추가</button>
    </div>
  );
}



function TodoItem({ todo, onToggle, onDelete }: { todo: Todo, onToggle: (id: number) => void, onDelete: (id: number) => void }) {
  return (
    <div className={`todo-card ${todo.completed ? 'done-card' : ''}`}>
      <div className="card-left">
        <div 
          className={`checkbox-container ${todo.completed ? 'checked' : 'unchecked'}`}
          onClick={() => onToggle(todo.id)}
        >
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

      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#9CA3AF"/>
        </svg>
      </button>
    </div>
  );
}



function TodoSection({ subtitle, initialInput, isFocused, initialTodos }: { subtitle: string, initialInput: string, isFocused: boolean, initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]); 
  };

  const handleToggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
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


      <TodoStats todos={todos} />
      <TodoInput onAdd={handleAddTodo} initialInput={initialInput} isFocused={isFocused} />

      <div className="todo-list">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onToggle={handleToggleTodo} 
            onDelete={handleDeleteTodo} 
          />
        ))}
      </div>
    </div>
  );
}



function App() {
  return (
    <div className="app-container">
      
      <TodoSection 
        subtitle="Week 4 — 기본 상태" 
        initialInput="" 
        isFocused={false} 
        initialTodos={INITIAL_TODOS} 
      />


      <TodoSection 
        subtitle="Week 4 — 포커스 상태" 
        initialInput="새로운 할 일" 
        isFocused={true} 
        initialTodos={INITIAL_TODOS.filter(todo => !todo.completed)} 
      />
    </div>
  );
}

export default App;