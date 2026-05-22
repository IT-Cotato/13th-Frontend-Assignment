import { useReducer, useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const CATEGORIES = ["공부", "운동", "개인", "업무"];

// Action 타입 정의
type TodoAction =
  | { type: 'ADD'; payload: Todo }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'EDIT'; payload: { id: number; newText: string } };

// 💡 2. Reducer 함수 정의
// 현재 상태(state)와 액션(action)을 받아, 새로운 상태를 반환합니다.
const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'EDIT':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );
    default:
      return state; // 알 수 없는 액션일 경우 기존 상태 유지
  }
};

const App = () => {
  // useReducer 
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  const [inputText, setInputText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // 검색어 및 카테고리 필터링
  const filteredTodos = todos.filter((todo) => {
    const matchCategory = selectedCategory === "전체" || todo.category === selectedCategory;
    const matchSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // 할 일 추가 로직
  const handleAdd = () => {
    const trimmedText = inputText.trim();
    if (trimmedText === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      category: selectedCategory === "전체" ? "개인" : selectedCategory,
    };

    dispatch({ type: 'ADD', payload: newTodo });
    setInputText("");
  };

  const handleDelete = (id: number) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const handleEdit = (id: number, newText: string) => {
    dispatch({ type: 'EDIT', payload: { id, newText } });
  };

  return (
    <div className="app-layout">
      <div className="todo-container">
        <TodoHeader todos={todos} />

        <div className="input-section">
          <div className="todo-input-container">
 
            <input
              className={`todo-input ${isFocused ? 'focused-input' : ''}`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="할 일을 입력하세요"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAdd();
              }}
            />
            <button className="todo-submit-btn" onClick={handleAdd}>추가</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="filter-section">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="할 일 검색..."
              aria-label="할 일 검색"
            />
          </div>

          <div className="filter-category-buttons">
            {['전체', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                className={`filter-btn cat-${cat === '전체' ? 'all' : cat} ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        <TodoList
          todos={filteredTodos}
          totalTodosCount={todos.length}
          onDelete={handleDelete}
          onToggle={handleToggle}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
};

export default App;