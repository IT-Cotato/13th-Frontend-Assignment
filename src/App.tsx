

import TodoHeader from './components/TodoHeader';
import TodoCard from './components/TodoCard';
import './App.css';

function App() {

  const todos = [
    { id: 1, task: "리액트 공식문서 읽기",  isDone: true },
    { id: 2, task: "알고리즘 문제 풀기", isDone: true },
    { id: 3, task: "운동 30분 하기", isDone: false},
    { id: 4, task: "프로젝트 회의 준비", isDone: false}
  ];

  return (
    <div className="app-container">
      
      {
      
      }
      <div className="demo-section">
        <TodoHeader subtitle="Week 2 ㅡ 체크박스 토글" />
        
        {/* 배열(todos)을 돌면서 4개의 카드를 찍어냅니다 */}
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoCard 
              key={todo.id} 
              num={todo.id}                  
              task={todo.task} 
              description={todo.description} 
              isDone={todo.isDone} 
            />
          ))}
        </div>
      </div>

      {/* 위아래 구분을 위해 간격을 띄워주는 투명한 여백 */}
      <div style={{ height: '64px' }}></div>

      {/* ==========================================
          🌟 2. 아래쪽 영역: 할 일이 없는 빈 상태
          ========================================== */}
      <div className="demo-section">
        <TodoHeader subtitle="Week 2 ㅡ 빈 상태" />
        
        {/* 배열이 비어있다고 가정하고 보여주는 빈 컨테이너입니다 */}
        <div className="todo-empty-container">
          <span className="empty-icon">📋</span>
          <p className="empty-text">아직 할 일이 없어요</p>
        </div>
      </div>

    </div>
  );
}

export default App;