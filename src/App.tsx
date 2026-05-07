import './App.css';
import EmptyList from './components/EmptyList';
import TodoCount from './components/TodoCount';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { INITIAL_TODOS } from './data/todo.data';
import type {
  TodoCategory,
  TodoFilterCategory,
  TodoItem,
} from './types/todo.types';
import { useState } from 'react';

const FILTER_CATEGORIES: TodoFilterCategory[] = [
  '전체',
  '공부',
  '운동',
  '개인',
  '업무',
];

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategory>('공부');
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] =
    useState<TodoFilterCategory>('전체');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const normalizedSearchText = searchText.trim().toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(normalizedSearchText);
    const matchesCategory =
      filterCategory === '전체' || todo.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const onCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const onAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: trimmed,
      isChecked: false,
      category: selectedCategory,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue('');
  };

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    if (editingTodoId === id) {
      setEditingTodoId(null);
      setEditingText('');
    }
  };

  const onEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditingText(text);
  };

  const onEditSave = (id: number) => {
    const trimmed = editingText.trim();
    if (!trimmed) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
    );
    setEditingTodoId(null);
    setEditingText('');
  };

  const onEditCancel = () => {
    setEditingTodoId(null);
    setEditingText('');
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        value={inputValue}
        selectedCategory={selectedCategory}
        onChange={setInputValue}
        onCategoryChange={setSelectedCategory}
        onAdd={onAdd}
      />

      <section className="todo-filter-section" aria-label="할 일 필터">
        <div className="todo-search-box">
          <span className="todo-search-icon" aria-hidden="true">
            🔍
          </span>
          <input
            className="todo-search-input"
            type="text"
            placeholder="할 일 검색..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="filter-buttons" aria-label="카테고리 필터">
          {FILTER_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-button category-${category} ${
                filterCategory === category ? 'is-selected' : ''
              }`}
              onClick={() => setFilterCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {todos.length === 0 ? (
        <EmptyList />
      ) : filteredTodos.length > 0 ? (
        <TodoList
          todos={filteredTodos}
          editingTodoId={editingTodoId}
          editingText={editingText}
          onCheck={onCheck}
          onDelete={onDelete}
          onEditStart={onEditStart}
          onEditChange={setEditingText}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
        />
      ) : (
        <EmptyList message="검색 결과가 없습니다" />
      )}
    </div>
  );
}

export default App;
