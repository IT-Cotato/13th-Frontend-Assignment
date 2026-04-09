import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // ==========================================
  // 1. 단일 상태
  // ==========================================
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공식문서 읽기", completed: true },
    { id: 2, text: "알고리즘 문제 풀기", completed: true },
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
    { id: 5, text: "장보기 하기", completed: false },
  ]);
  
  // 입력창이 포커스(클릭) 되었는지 확인하는 상태
  const [isFocused, setIsFocused] = useState(false);

  const handleAdd = () => {
    if (inputText.trim() === "") return; // 빈 문자열 방지
    const newTodo = {
      id: Date.now(), // 고유 ID 생성
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText(""); // 입력창 초기화
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ==========================================
  // 조건부 렌더링 적용
  // ==========================================
  return (
    <div className="app-layout">
      <div className="todo-container">
        <div className="section">
          


          <TodoHeader />
          
          <div className="todo-input-container">
            <input 
              type="text" 
              // isFocused가 참일 때 'focused-input' 클래스 추가
              className={`todo-input ${isFocused ? 'focused-input' : ''}`}
              placeholder="할 일을 입력하세요" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}  // 입력창을 클릭했을 때
              onBlur={() => setIsFocused(false)}  // 입력창 바깥을 클릭했을 때
            />
            <button className="todo-submit-btn" onClick={handleAdd}>
              추가
            </button>
          </div>

          {/* 데이터 유무에 따른 빈 화면(Empty state) 조건부 렌더링은 이미 TodoList 내부에 구현되어 작동합니다 */}
          <TodoList todos={todos} onDelete={handleDelete} />
          
        </div>
      </div>
    </div>
  );
};

export default App;