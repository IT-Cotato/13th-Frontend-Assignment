import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

const headerIcon = "✅";
const headerTitle = "오늘의 할 일";

const todos = [
  {id: 1, text:"리액트 공식문서 읽기", done: true},
  {id: 2, text:"알고리즘 문제 풀기", done: true},
  {id: 3, text:"운동 30분 하기", done: false},
  {id: 4, text:"프로젝트 회의 준비", done: false},
];

const weekLabel = todos.length === 0 ? "Week 2 — 빈 상태" : "Week 2 — 체크박스 토글";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <p className="week-label">{weekLabel}</p>
        <TodoHeader icon={headerIcon} title={headerTitle} />
        <TodoList items={todos} />
      </div>
    </div>
  );
}