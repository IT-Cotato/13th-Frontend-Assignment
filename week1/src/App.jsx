import TodoHeader from "./components/TodoHeader.jsx";
import TodoList from "./components/TodoList.jsx";

const todoItems = [
  { id: 1, text: "리액트 공식문서 읽기" },
  { id: 2, text: "알고리즘 문제 풀기" },
  { id: 3, text: "운동 30분 하기" },
  { id: 4, text: "프로젝트 회의 준비" }
];

export default function App() {
  return (
    <main className="page">
      <section className="design-frame">
        <p className="eyebrow">Week 1 - 기본 레이아웃</p>
        <section className="todo-panel" aria-labelledby="today-title">
          <TodoHeader icon="✅" title="오늘의 할 일" />
          <TodoList items={todoItems} />
        </section>
      </section>
    </main>
  );
}
