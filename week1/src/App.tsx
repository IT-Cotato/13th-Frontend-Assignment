import { FormEvent, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { focusPreviewItems, initialTodoItems } from "./data";

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodo, setNewTodo] = useState("");
  const [focusItems, setFocusItems] = useState(focusPreviewItems);
  const [focusTodo, setFocusTodo] = useState("");

  function handleToggle(id: number) {
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDelete(id: number) {
    setTodoItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleFocusToggle(id: number) {
    setFocusItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleFocusDelete(id: number) {
    setFocusItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTodo = newTodo.trim();

    if (!trimmedTodo) {
      return;
    }

    setTodoItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        text: trimmedTodo,
        checked: false,
      },
    ]);
    setNewTodo("");
  }

  function handleFocusAdd(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTodo = focusTodo.trim();

    if (!trimmedTodo) {
      return;
    }

    setFocusItems((currentItems) => [
      {
        id: Date.now(),
        text: trimmedTodo,
        checked: false,
      },
      ...currentItems,
    ]);
    setFocusTodo("");
  }

  const todoCompletedCount = todoItems.filter((item) => item.checked).length;
  const focusCompletedCount = focusItems.filter((item) => item.checked).length;

  return (
    <main className="page">
      <section className="design-frame">
        <div className="todo-stack">
          <section className="todo-panel" aria-labelledby="toggle-title">
            <p className="eyebrow">Week 3 - 기본 상태</p>
            <TodoHeader icon="✅" title="오늘의 할 일" headingId="toggle-title" />
            <div className="todo-summary" aria-label="할 일 현황">
              <span>
                전체 <strong>{todoItems.length}개</strong>
              </span>
              <span>
                완료 <strong className="todo-summary-complete-count">{todoCompletedCount}</strong>개
              </span>
              <span>
                미완료{" "}
                <strong className="todo-summary-pending-count">
                  {todoItems.length - todoCompletedCount}
                </strong>개
              </span>
            </div>
            <form className="todo-form" onSubmit={handleAdd}>
              <input
                className="todo-input"
                type="text"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
                placeholder="할 일을 입력하세요"
                aria-label="할 일 입력"
              />
              <button className="todo-add-button" type="submit">
                추가
              </button>
            </form>
            <TodoList items={todoItems} onToggle={handleToggle} onDelete={handleDelete} />
          </section>

          <section className="todo-panel" aria-labelledby="focus-title">
            <p className="eyebrow">Week 3 - 입력 중 (Focus)</p>
            <TodoHeader icon="✅" title="오늘의 할 일" headingId="focus-title" />
            <div className="todo-summary" aria-label="할 일 현황">
              <span>
                전체 <strong>{focusItems.length}개</strong>
              </span>
              <span>
                완료 <strong className="todo-summary-complete-count">{focusCompletedCount}</strong>개
              </span>
              <span>
                미완료{" "}
                <strong className="todo-summary-pending-count">
                  {focusItems.length - focusCompletedCount}
                </strong>개
              </span>
            </div>
            <form className="todo-form" onSubmit={handleFocusAdd}>
              <input
                className="todo-input"
                type="text"
                value={focusTodo}
                onChange={(event) => setFocusTodo(event.target.value)}
                placeholder="할 일을 입력하세요"
                aria-label="새로운 할 일 입력"
              />
              <button className="todo-add-button" type="submit">
                추가
              </button>
            </form>
            <TodoList
              items={focusItems}
              onToggle={handleFocusToggle}
              onDelete={handleFocusDelete}
            />
          </section>
        </div>
      </section>
    </main>
  );
}
