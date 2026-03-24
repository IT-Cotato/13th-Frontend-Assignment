import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import type { TodoItem } from "./types";

const initialTodoItems: TodoItem[] = [
  { id: 1, text: "리액트 공식문서 읽기", checked: true },
  { id: 2, text: "알고리즘 문제 풀기", checked: true },
  { id: 3, text: "운동 30분 하기", checked: false },
  { id: 4, text: "프로젝트 회의 준비", checked: false },
];

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  function handleToggle(id: number) {
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <main className="page">
      <section className="design-frame">
        <div className="todo-stack">
          <section className="todo-panel" aria-labelledby="toggle-title">
            <p className="eyebrow">Week 2 - 체크박스 토글</p>
            <TodoHeader icon="✅" title="오늘의 할 일" headingId="toggle-title" />
            <TodoList items={todoItems} onToggle={handleToggle} />
          </section>

          <section className="todo-panel empty-panel" aria-labelledby="empty-title">
            <p className="eyebrow">Week 2 - 빈 상태</p>
            <TodoHeader icon="✅" title="오늘의 할 일" headingId="empty-title" />
            <div className="empty-state">
              <span className="empty-state-icon" aria-hidden="true">
                📋
              </span>
              <p className="empty-state-text">아직 할 일이 없어요</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
