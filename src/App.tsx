import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import "./App.css";

const todos = [
  "리액트 공식문서 읽기",
  "알고리즘 문제 풀기",
  "운동 30분 하기",
  "프로젝트 회의 준비",
];

const weekLabel = "Week 1 — 기본 레이아웃";
const headerIcon = "✅";
const headerTitle = "오늘의 할 일";

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