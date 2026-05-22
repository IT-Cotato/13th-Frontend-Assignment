import { useState } from 'react';
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

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
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

  // 할 일 추가 로직 (trim된 값으로 저장)
  const handleAdd = () => {
    const trimmedText = inputText.trim();
    if (trimmedText === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      category: selectedCategory === "전체" ? "개인" : selectedCategory,
    };

    // 💡 함수형 상태 업데이트 적용
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputText("");
  };

  // 💡 삭제, 토글, 수정 모두 이전 상태(prevTodos)를 기반으로 업데이트하도록 수정
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prevTodos) => prevTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleEdit = (id: number, newText: string) => {
    setTodos((prevTodos) => prevTodos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
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

        {/* 검색 및 필터 영역 */}
        <div className="filter-section">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="할 일 검색..."
              aria-label="할 일 검색" // 💡 검색창 접근성 라벨 추가
            />
          </div>

          <div className="filter-category-buttons">
            {['전체', ...CATEGORIES].map((cat) => (
              <button
                key={cat}
                className={`filter-btn cat-${cat === '전체' ? 'all' : cat} ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
                aria-pressed={selectedCategory === cat} // 💡 카테고리 선택 상태 접근성 속성 추가
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