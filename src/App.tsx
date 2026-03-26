import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function App() {
  const todos = [
    { id: 1, text: "리액트 공식문서 읽기", isDone: true },
    { id: 2, text: "알고리즘 문제 풀기", isDone: true },
    { id: 3, text: "운동 30분 하기", isDone: false },
    { id: 4, text: "프로젝트 회의 준비", isDone: false },
  ];

  return (
    <div className="frame3">
      {/* 첫 번째 오늘의 할 일 */}
      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList todos={todos} />
      </div>

      {/* 두 번째 오늘의 할 일 */}
      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList todos={[]} /> {/* 빈 배열 전달 */}
      </div>
    </div>
  );
}

export default App;