import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // ==========================================
  // 1. 위쪽 화면 (기본 상태) 
  // ==========================================
  const [topInputText, setTopInputText] = useState("");
  const [topTodos, setTopTodos] = useState([
    { id: 1, text: "리액트 공식문서 읽기", completed: true },
    { id: 2, text: "알고리즘 문제 풀기", completed: true },
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
    { id: 5, text: "장보기 하기", completed: false },
  ]);

  // 상단 추가 함수
  const handleAddTop = () => {
    if (topInputText.trim() === "") return; // 빈 문자열 방지
    const newTodo = {
      id: Date.now(), // 고유 ID 생성
      text: topInputText,
      completed: false,
    };
    setTopTodos([...topTodos, newTodo]);
    setTopInputText(""); // 입력창 초기화
  };

  // 상단 삭제 함수
  const handleDeleteTop = (id: number) => {
    setTopTodos(topTodos.filter((todo) => todo.id !== id));
  };


  // ==========================================
  // 2. 아래쪽 화면 (Focus 상태) 
  // ==========================================
  const [bottomInputText, setBottomInputText] = useState("");
  const [bottomTodos, setBottomTodos] = useState([
    { id: 3, text: "운동 30분 하기", completed: false },
    { id: 4, text: "프로젝트 회의 준비", completed: false },
  ]);

  // 하단 추가 함수
  const handleAddBottom = () => {
    if (bottomInputText.trim() === "") return; 
    const newTodo = {
      id: Date.now(),
      text: bottomInputText,
      completed: false,
    };
    setBottomTodos([...bottomTodos, newTodo]);
    setBottomInputText(""); 
  };

  // 하단 삭제 함수
  const handleDeleteBottom = (id: number) => {
    setBottomTodos(bottomTodos.filter((todo) => todo.id !== id));
  };


  return (
    <div className="app-layout">
      <div className="todo-container">
        
        {/* ========================================= */}
        {/* 첫 번째 화면: 기본 상태 */}
        {/* ========================================= */}
        <div className="section">
          <TodoHeader />
          <div className="todo-input-container">
            <input 
              type="text" 
              className="todo-input" 
              placeholder="할 일을 입력하세요" 
              value={topInputText}
              onChange={(e) => setTopInputText(e.target.value)}
            />
            {/* 추가 버튼 클릭 시 handleAddTop 실행 */}
            <button className="todo-submit-btn" onClick={handleAddTop}>
              추가
            </button>
          </div>

          {/* 삭제 함수를 TodoList로 전달 */}
          <TodoList todos={topTodos} onDelete={handleDeleteTop} />
        </div>


        {/* ========================================= */}
        {/* 두 번째 화면: 입력 중 (Focus) 상태 */}
        {/* ========================================= */}
        <div className="section" style={{ marginTop: '96px' }}>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 16px 0' }}>
            Week 3 — 입력 중 (Focus)
          </p>
          <TodoHeader />
          
          <div className="todo-input-container">
            <input 
              type="text" 
              className="todo-input focused-input" 
              placeholder="새로운 할 일" 
              value={bottomInputText}
              onChange={(e) => setBottomInputText(e.target.value)}
            />
            {/* 추가 버튼 클릭 시 handleAddBottom 실행 */}
            <button className="todo-submit-btn" onClick={handleAddBottom}>
              추가
            </button>
          </div>

          {/* 삭제 함수를 TodoList로 전달 */}
          <TodoList todos={bottomTodos} onDelete={handleDeleteBottom} />
        </div>

      </div>
    </div>
  );
};

export default App;