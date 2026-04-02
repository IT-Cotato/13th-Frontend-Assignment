import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // 1. 위쪽 화면 데이터 (기본 상태 - 5개)
  const topTodos = [
    { id: 1, content: "리액트 공식문서 읽기", isDone: true },
    { id: 2, content: "알고리즘 문제 풀기", isDone: true },
    { id: 3, content: "운동 30분 하기", isDone: false },
    { id: 4, content: "프로젝트 회의 준비", isDone: false },
    { id: 5, content: "장보기 하기", isDone: false },
  ];

  // 2. 아래쪽 화면 데이터 (입력 중 상태 - 2개)
  const bottomTodos = [
    { id: 3, content: "운동 30분 하기", isDone: false },
    { id: 4, content: "프로젝트 회의 준비", isDone: false },
  ];

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
            />
            <button className="todo-submit-btn">추가</button>
          </div>

          <TodoList todos={topTodos} />
        </div>

        {/* ========================================= */}
        {/* 두 번째 화면: 입력 중 (Focus) 상태 */}
        {/* ========================================= */}
        <div className="section" style={{ marginTop: '96px' }}>
          

          <TodoHeader />
          
          <div className="todo-input-container">
            {/* 포커스 상태를 보여주기 위해 'focused-input' 클래스 추가 */}
            <input 
              type="text" 
              className="todo-input focused-input" 
              placeholder="새로운 할 일" 
            />
            <button className="todo-submit-btn">추가</button>
          </div>

          <TodoList todos={bottomTodos} />
        </div>

      </div>
    </div>
  );
};

export default App;