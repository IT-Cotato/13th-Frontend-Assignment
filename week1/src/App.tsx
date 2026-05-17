import { FormEvent, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { initialTodoItems } from "./data";
import type { TodoCategory, TodoItem } from "./types";

const categories: { id: TodoCategory; label: string }[] = [
  { id: "study", label: "공부" },
  { id: "exercise", label: "운동" },
  { id: "personal", label: "개인" },
  { id: "work", label: "업무" },
];

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TodoCategory>("study");
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingTodoText, setEditingTodoText] = useState("");

  function handleToggle(id: number) {
    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDelete(id: number) {
    setTodoItems((currentItems) => currentItems.filter((item) => item.id !== id));

    if (editingTodoId === id) {
      setEditingTodoId(null);
      setEditingTodoText("");
    }
  }

  function handleEditStart(id: number, text: string) {
    setEditingTodoId(id);
    setEditingTodoText(text);
  }

  function handleEditCancel() {
    setEditingTodoId(null);
    setEditingTodoText("");
  }

  function handleEditSave(id: number) {
    const trimmedTodo = editingTodoText.trim();

    if (!trimmedTodo) {
      return;
    }

    setTodoItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, text: trimmedTodo } : item
      )
    );
    setEditingTodoId(null);
    setEditingTodoText("");
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
        category: selectedCategory,
      },
    ]);
    setNewTodo("");
  }

  const todoCompletedCount = todoItems.filter((item) => item.checked).length;

  return (
    <main className="page">
      <section className="design-frame">
        <div className="todo-stack">
          <TodoPanel
            eyebrow="Week 3 - 기본 상태"
            headingId="toggle-title"
            items={todoItems}
            completedCount={todoCompletedCount}
            todoText={newTodo}
            selectedCategory={selectedCategory}
            editingId={editingTodoId}
            editingText={editingTodoText}
            onTodoTextChange={setNewTodo}
            onCategorySelect={setSelectedCategory}
            onAdd={handleAdd}
            onEditingTextChange={setEditingTodoText}
            onEditStart={handleEditStart}
            onEditSave={handleEditSave}
            onEditCancel={handleEditCancel}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />

          <TodoPanel
            eyebrow="Week 3 - 입력 중 (Focus)"
            headingId="focus-title"
            items={todoItems}
            completedCount={todoCompletedCount}
            todoText={newTodo}
            selectedCategory={selectedCategory}
            editingId={editingTodoId}
            editingText={editingTodoText}
            onTodoTextChange={setNewTodo}
            onCategorySelect={setSelectedCategory}
            onAdd={handleAdd}
            onEditingTextChange={setEditingTodoText}
            onEditStart={handleEditStart}
            onEditSave={handleEditSave}
            onEditCancel={handleEditCancel}
            onToggle={handleToggle}
            onDelete={handleDelete}
            isFocusPreview
          />
        </div>
      </section>
    </main>
  );
}

interface TodoPanelProps {
  eyebrow: string;
  headingId: string;
  items: TodoItem[];
  completedCount: number;
  todoText: string;
  selectedCategory: TodoCategory;
  editingId: number | null;
  editingText: string;
  onTodoTextChange: (text: string) => void;
  onCategorySelect: (category: TodoCategory) => void;
  onAdd: (event: FormEvent<HTMLFormElement>) => void;
  onEditingTextChange: (text: string) => void;
  onEditStart: (id: number, text: string) => void;
  onEditSave: (id: number) => void;
  onEditCancel: () => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  isFocusPreview?: boolean;
}

function TodoPanel({
  eyebrow,
  headingId,
  items,
  completedCount,
  todoText,
  selectedCategory,
  editingId,
  editingText,
  onTodoTextChange,
  onCategorySelect,
  onAdd,
  onEditingTextChange,
  onEditStart,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
  isFocusPreview = false,
}: TodoPanelProps) {
  return (
    <section
      className={`todo-panel ${isFocusPreview ? "is-focus-preview" : ""}`}
      aria-labelledby={headingId}
    >
      <p className="eyebrow">{eyebrow}</p>
      <TodoHeader icon="✅" title="오늘의 할 일" headingId={headingId} />
      <div className="todo-summary" aria-label="할 일 현황">
        <span>
          전체 <strong>{items.length}개</strong>
        </span>
        <span>
          완료 <strong className="todo-summary-complete-count">{completedCount}</strong>개
        </span>
        <span>
          미완료{" "}
          <strong className="todo-summary-pending-count">
            {items.length - completedCount}
          </strong>개
        </span>
      </div>
      <div className="category-box">
        <form className="todo-form" onSubmit={onAdd}>
          <input
            className="todo-input"
            type="text"
            value={todoText}
            onChange={(event) => onTodoTextChange(event.target.value)}
            placeholder="할 일을 입력하세요"
            aria-label="할 일 입력"
          />
          <button className="todo-add-button" type="submit">
            추가
          </button>
        </form>
        <div className="category-selector" aria-label="카테고리 선택">
          {categories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                className={`category-button is-${category.id} ${
                  isSelected ? "is-selected" : ""
                }`}
                aria-pressed={isSelected}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
        <TodoList
          items={items}
          editingId={editingId}
          editingText={editingText}
          onEditingTextChange={onEditingTextChange}
          onEditStart={onEditStart}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      </div>
    </section>
  );
}
