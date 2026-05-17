import { FormEvent, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import { initialTodoItems } from "./data";
import type { TodoCategory, TodoItem } from "./types";

type TodoFilterCategory = TodoCategory | "all";

const categories: { id: TodoCategory; label: string }[] = [
  { id: "study", label: "공부" },
  { id: "exercise", label: "운동" },
  { id: "personal", label: "개인" },
  { id: "work", label: "업무" },
];

const filterCategories: { id: TodoFilterCategory; label: string }[] = [
  { id: "all", label: "전체" },
  ...categories,
];

export default function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodo, setNewTodo] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<TodoCategory>("study");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<TodoFilterCategory>("all");
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
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredTodoItems = todoItems.filter((item) => {
    const matchesSearchTerm = item.text.toLowerCase().includes(normalizedSearchTerm);
    const matchesCategory =
      selectedFilterCategory === "all" || item.category === selectedFilterCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <main className="page">
      <section className="design-frame">
        <div className="todo-stack">
          <TodoPanel
            eyebrow="Week 6 - 검색/필터 적용"
            headingId="toggle-title"
            allItems={todoItems}
            items={filteredTodoItems}
            totalCount={todoItems.length}
            completedCount={todoCompletedCount}
            todoText={newTodo}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
            selectedFilterCategory={selectedFilterCategory}
            editingId={editingTodoId}
            editingText={editingTodoText}
            onTodoTextChange={setNewTodo}
            onCategorySelect={setSelectedCategory}
            onSearchTermChange={setSearchTerm}
            onFilterCategorySelect={setSelectedFilterCategory}
            onAdd={handleAdd}
            onEditingTextChange={setEditingTodoText}
            onEditStart={handleEditStart}
            onEditSave={handleEditSave}
            onEditCancel={handleEditCancel}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </div>
      </section>
    </main>
  );
}

interface TodoPanelProps {
  eyebrow: string;
  headingId: string;
  allItems: TodoItem[];
  items: TodoItem[];
  totalCount: number;
  completedCount: number;
  todoText: string;
  selectedCategory: TodoCategory;
  searchTerm: string;
  selectedFilterCategory: TodoFilterCategory;
  editingId: number | null;
  editingText: string;
  onTodoTextChange: (text: string) => void;
  onCategorySelect: (category: TodoCategory) => void;
  onSearchTermChange: (text: string) => void;
  onFilterCategorySelect: (category: TodoFilterCategory) => void;
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
  allItems,
  items,
  totalCount,
  completedCount,
  todoText,
  selectedCategory,
  searchTerm,
  selectedFilterCategory,
  editingId,
  editingText,
  onTodoTextChange,
  onCategorySelect,
  onSearchTermChange,
  onFilterCategorySelect,
  onAdd,
  onEditingTextChange,
  onEditStart,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
  isFocusPreview = false,
}: TodoPanelProps) {
  const completedCategories = categories.reduce<Record<TodoCategory, boolean>>(
    (categoryStatus, category) => {
      const categoryItems = allItems.filter((item) => item.category === category.id);

      return {
        ...categoryStatus,
        [category.id]:
          categoryItems.length > 0 && categoryItems.every((item) => item.checked),
      };
    },
    {
      study: false,
      exercise: false,
      personal: false,
      work: false,
    }
  );

  return (
    <section
      className={`todo-panel ${isFocusPreview ? "is-focus-preview" : ""}`}
      aria-labelledby={headingId}
    >
      <p className="eyebrow">{eyebrow}</p>
      <TodoHeader icon="✅" title="오늘의 할 일" headingId={headingId} />
      <div className="todo-summary" aria-label="할 일 현황">
        <span>
          전체 <strong>{totalCount}개</strong>
        </span>
        <span>
          완료 <strong className="todo-summary-complete-count">{completedCount}</strong>개
        </span>
        <span>
          미완료{" "}
          <strong className="todo-summary-pending-count">
            {totalCount - completedCount}
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
            const isComplete = completedCategories[category.id];

            return (
              <button
                key={category.id}
                type="button"
                className={`category-button is-${category.id} ${
                  isSelected ? "is-selected" : ""
                } ${
                  isComplete ? "is-complete" : ""
                }`}
                aria-pressed={isSelected}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.label}
              </button>
            );
          })}
        </div>
        <div className="todo-filter-box">
          <label className="todo-search-label">
            <span aria-hidden="true">🔍</span>
            <input
              className="todo-search-input"
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchTermChange(event.target.value)}
              placeholder="할 일 검색..."
              aria-label="할 일 검색"
            />
          </label>
          <div className="filter-selector" aria-label="목록 카테고리 필터">
            {filterCategories.map((category) => {
              const isSelected = selectedFilterCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`filter-button is-${category.id} ${
                    isSelected ? "is-selected" : ""
                  }`}
                  aria-pressed={isSelected}
                  onClick={() => onFilterCategorySelect(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
        <TodoList
          items={items}
          emptyMessage="검색 결과가 없습니다"
          emptyIcon="🔍"
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
