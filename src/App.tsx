import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
import './App.css'

const todos = [
  { id: 1, text: "리액트 공식문서 읽기s", isCompleted: true },
  { id: 2, text: "알고리즘 문제 풀기", isCompleted: true },
  { id: 3, text: "운동 30분 하기", isCompleted: false },
  { id: 4, text: "프로젝트 회의 준비", isCompleted: false },
];

function App() {
  
  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
