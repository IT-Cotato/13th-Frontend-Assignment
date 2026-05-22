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
import { useReducer, useState } from 'react';

const ALL_CATEGORY = '전체';
const FILTER_CATEGORIES = [
  '전체',
  '공부',
  '운동',
  '개인',
  '업무',
] satisfies TodoFilterCategory[];

type TodoState = {
  todos: TodoItem[];
  editingTodoId: number | null;
  editingText: string;
};

type TodoAction =
  | { type: 'toggle'; id: number }
  | { type: 'add'; text: string; category: TodoCategory }
  | { type: 'delete'; id: number }
  | { type: 'editStart'; id: number; text: string }
  | { type: 'editChange'; text: string }
  | { type: 'editSave'; id: number }
  | { type: 'editCancel' };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? { ...todo, isChecked: !todo.isChecked }
            : todo
        ),
      };
    case 'add':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.text,
            isChecked: false,
            category: action.category,
          },
        ],
      };
    case 'delete':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
        editingTodoId:
          state.editingTodoId === action.id ? null : state.editingTodoId,
        editingText: state.editingTodoId === action.id ? '' : state.editingText,
      };
    case 'editStart':
      return { ...state, editingTodoId: action.id, editingText: action.text };
    case 'editChange':
      return { ...state, editingText: action.text };
    case 'editSave': {
      const text = state.editingText.trim();
      if (!text) return state;

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text } : todo
        ),
        editingTodoId: null,
        editingText: '',
      };
    }
    case 'editCancel':
      return { ...state, editingTodoId: null, editingText: '' };
  }
}

function App() {
  const [{ todos, editingTodoId, editingText }, dispatch] = useReducer(
    todoReducer,
    { todos: INITIAL_TODOS, editingTodoId: null, editingText: '' }
  );
  const [inputKey, setInputKey] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] =
    useState<TodoFilterCategory>(ALL_CATEGORY);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());
    const matchesCategory =
      filterCategory === ALL_CATEGORY || todo.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const onAdd = (text: string, category: TodoCategory) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    dispatch({ type: 'add', text: trimmed, category });
    setInputKey((prev) => prev + 1);
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput key={inputKey} onAdd={onAdd} />

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
          onCheck={(id) => dispatch({ type: 'toggle', id })}
          onDelete={(id) => dispatch({ type: 'delete', id })}
          onEditStart={(id, text) => dispatch({ type: 'editStart', id, text })}
          onEditChange={(text) => dispatch({ type: 'editChange', text })}
          onEditSave={(id) => dispatch({ type: 'editSave', id })}
          onEditCancel={() => dispatch({ type: 'editCancel' })}
        />
      ) : (
        <EmptyList message="검색 결과가 없습니다" />
      )}
    </div>
  );
}

export default App;
