import { FormEvent, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { focusPreviewItems, initialTodoItems } from "./data";
import type { TodoCategory } from "./types";

const categories: { id: TodoCategory; label: string }[] = [
  { id: "study", label: "공부" },
  { id: "exercise", label: "운동" },
  { id: "personal", label: "개인" },
  { id: "work", label: "업무" },
];

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodo, setNewTodo] = useState("");
  const [newCategory, setNewCategory] = useState<TodoCategory>("study");
  const [focusItems, setFocusItems] = useState(focusPreviewItems);
  const [focusTodo, setFocusTodo] = useState("");
  const [focusCategory, setFocusCategory] = useState<TodoCategory>("exercise");

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
        category: newCategory,
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
        category: focusCategory,
      },
      ...currentItems,
    ]);
    setFocusTodo("");
  }

  const todoCompletedCount = todoItems.filter((item) => item.checked).length;
  const focusCompletedCount = focusItems.filter((item) => item.checked).length;

  function isCategoryComplete(items: typeof todoItems, categoryId: TodoCategory) {
    const categoryItems = items.filter((item) => item.category === categoryId);

    return categoryItems.length > 0 && categoryItems.every((item) => item.checked);
  }

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
            <div className="category-box">
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
              <div className="category-selector" aria-label="카테고리 선택">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-button is-${category.id} ${
                      isCategoryComplete(todoItems, category.id) ? "is-complete" : ""
                    }`}
                    onClick={() => setNewCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <TodoList items={todoItems} onToggle={handleToggle} onDelete={handleDelete} />
            </div>
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
            <div className="category-box">
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
              <div className="category-selector" aria-label="카테고리 선택">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-button is-${category.id} ${
                      isCategoryComplete(focusItems, category.id) ? "is-complete" : ""
                    }`}
                    onClick={() => setFocusCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <TodoList
                items={focusItems}
                onToggle={handleFocusToggle}
                onDelete={handleFocusDelete}
              />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
