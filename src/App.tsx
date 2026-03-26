
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // 1. 위쪽에 보여줄 데이터 (꽉 찬 배열)
  const populatedTodos = [
    { id: 1, content: "리액트 공식문서 읽기", isDone: true },
    { id: 2, content: "알고리즘 문제 풀기", isDone: true },
    { id: 3, content: "운동 30분 하기", isDone: false },
    { id: 4, content: "프로젝트 회의 준비", isDone: false },
  ];

  // 2. 아래쪽에 보여줄 데이터 (텅 빈 배열)
  const emptyTodos: any[] = [];

  return (
    <div className="app-layout">
      <div className="todo-container">
        
        {/* ========================================= */}
        {/* 첫 번째 화면: 데이터가 있을 때 (체크박스 토글) */}
        {/* ========================================= */}
        <div className="section">
          <TodoHeader />
          <TodoList todos={populatedTodos} />
        </div>

        {/* ========================================= */}
        {/* 두 번째 화면: 데이터가 없을 때 (빈 상태) */}
        {/* ========================================= */}
        <div className="section" style={{ marginTop: '96px' }}>

          <TodoHeader />
          <TodoList todos={emptyTodos} />
        </div>

      </div>
    </div>
  );
};

export default App;