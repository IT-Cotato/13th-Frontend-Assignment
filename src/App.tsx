// src/App.tsx
import { useState } from 'react';
import './App.css';

type Category = '공부' | '운동' | '개인' | '업무';
type FilterCategory = '전체' | Category;

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
}

const INITIAL_TODOS: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", completed: true, category: '공부' },
  { id: 2, text: "알고리즘 문제 풀기", completed: true, category: '공부' },
  { id: 3, text: "운동 30분 하기", completed: false, category: '운동' },
  { id: 4, text: "프로젝트 회의 준비", completed: false, category: '업무' },
  { id: 5, text: "장보기 하기", completed: false, category: '개인' },
  { id: 6, text: "블로그 포스팅 작성", completed: false, category: '업무' },
];

function TodoItem({
  todo, onToggle, onDelete, onUpdate, forceEdit = false
}: {
  todo: Todo, onToggle: (id: number) => void, onDelete: (id: number) => void, onUpdate: (id: number, text: string) => void, forceEdit?: boolean
}) {
  const [isEditing, setIsEditing] = useState(forceEdit);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-card ${isEditing ? 'editing-card' : ''}`}>
      <div className="card-left">
        <div
          className={`checkbox-container ${todo.completed ? 'checked' : 'unchecked'}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.completed && (
            <svg width="12" height="9" viewBox="0 0 14 10" fill="none"><path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </div>

        <div className="task-content">
          {isEditing ? (
            <div className="edit-mode-container">
              <div className="edit-input-wrapper">
                <input
                  className="edit-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                  autoFocus
                />
                <button className="save-btn" onClick={handleSave}>저장</button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>취소</button>
              </div>
            </div>
          ) : (
            <span className={`task-text ${todo.completed ? 'done-text' : ''}`}>{todo.text}</span>
          )}
          <div className={`category-tag tag-${todo.category} ${todo.completed ? 'done-tag' : ''}`}>
            {todo.category}
          </div>
        </div>
      </div>

      {!isEditing && (
        <div className="item-actions">
          <button className="action-btn" onClick={() => setIsEditing(true)}>✏️</button>
          <button className="action-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
        </div>
      )}
    </div>
  );
}

function TodoSection({ subtitle, initialTodos, isEditDemo = false, showSearch = false }: {
  subtitle?: string,
  initialTodos: Todo[],
  isEditDemo?: boolean,
  showSearch?: boolean
}) {
  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>('공부');
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('전체');

  const handleAdd = () => {
    if (!inputText.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputText,
      completed: false,
      category: selectedCategory
    };
    setTodos([newTodo, ...todos]);
    setInputText("");
  };

  // 검색어와 카테고리를 모두 만족하는 할 일만 걸러냄
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.text.includes(searchText);
    const matchesCategory = filterCategory === '전체' || todo.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  // showSearch가 true일 때는 필터 결과를, 아닐 때는 전체 목록을 표시
  const displayTodos = showSearch ? filteredTodos : todos;

  // 현재 필터 상태에 따라 subtitle 결정
  const getSubtitle = () => {
    if (!showSearch) return subtitle;
    if (filteredTodos.length === 0) return 'Week 6 — 검색 결과 없음';
    if (filterCategory !== '전체') return `Week 6 — ${filterCategory} 필터 적용`;
    return 'Week 6 — 전체 필터';
  };

  const currentSubtitle = getSubtitle();

  return (
    <div className="todo-section-container">
      {currentSubtitle && <div className="section-subtitle">{currentSubtitle}</div>}
      <header className="todo-header">
        <span className="header-icon">✅</span>
        <h1 className="title">오늘의 할 일</h1>
      </header>

      <div className="stats-card">
        <span>전체 <strong>{todos.length}</strong>개</span>
        <span className="divider">·</span>
        <span>완료 <strong className="text-green">{todos.filter(t => t.completed).length}</strong>개</span>
        <span className="divider">·</span>
        <span>미완료 <strong className="text-blue">{todos.filter(t => !t.completed).length}</strong>개</span>
      </div>

      <div className="input-row">
        <input
          className="todo-input"
          placeholder="할 일을 입력하세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button className="add-button" onClick={handleAdd}>추가</button>
      </div>

      <div className="filter-row">
        {(['공부', '운동', '개인', '업무'] as const).map(cat => (
          <button
            key={cat}
            className={`filter-btn filter-${cat} ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {showSearch && (
        <>
          <div className="search-row">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="할 일 검색..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="filter-row">
            {(['전체', '공부', '운동', '개인', '업무'] as const).map(cat => (
              <button
                key={cat}
                className={`filter-btn filter-${cat} ${filterCategory === cat ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}

      <div className="todo-list">
        {displayTodos.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <p className="empty-text">검색 결과가 없습니다</p>
          </div>
        ) : (
          displayTodos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              forceEdit={isEditDemo && index === 0}
              onToggle={(id) => setTodos(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t))}
              onDelete={(id) => setTodos(todos.filter(t => t.id !== id))}
              onUpdate={(id, text) => setTodos(todos.map(t => t.id === id ? {...t, text} : t))}
            />
          ))
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <TodoSection initialTodos={INITIAL_TODOS} showSearch={true} />
    </div>
  );
}

export default App;
