import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

const CATEGORIES = ['공부', '운동', '개인', '업무'];

const App = () => {
  const [inputText, setInputText] = useState("");
  const [inputCategory, setInputCategory] = useState("공부"); // 기본 선택값
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공식문서 읽기", completed: true, category: "공부" },
    { id: 2, text: "알고리즘 문제 풀기", completed: true, category: "공부" },
    { id: 3, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 4, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 5, text: "장보기 하기", completed: false, category: "개인" },
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [isFocused, setIsFocused] = useState(false);

  const filteredTodos = todos.filter((todo) => {
    const matchCategory = selectedCategory === "전체" || todo.category === selectedCategory;
    const matchSearch = todo.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAdd = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
      category: inputCategory, 
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const handleDelete = (id: number) => setTodos(todos.filter(t => t.id !== id));
  const handleToggle = (id: number) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const handleEdit = (id: number, newText: string) => setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));

  return (
    <div className="app-layout">
      <div className="todo-container">
        <div className="section">
          
          {/* 1. 헤더 및 통계 */}
          <TodoHeader todos={todos} />
          
          {/* 2. 할 일 입력 영역 (위로 올라옴) */}
          <div className="input-section">
            <div className="todo-input-container">
              <input 
                type="text" 
                className={`todo-input ${isFocused ? 'focused-input' : ''}`}
                placeholder="할 일을 입력하세요" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button className="todo-submit-btn" onClick={handleAdd}>추가</button>
            </div>
            
            {/* 할 일 추가용 카테고리 버튼들 */}
            <div className="add-category-buttons">
              {CATEGORIES.map(cat => (
                <button 
                  key={`add-${cat}`}
                  // 선택된 카테고리에는 active 클래스를, 그리고 각 카테고리별 고유 색상 클래스(cat-이름)를 줍니다.
                  className={`cat-btn cat-${cat} ${inputCategory === cat ? 'active' : ''}`}
                  onClick={() => setInputCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <hr className="divider" />
          
          {/* 3. 검색 및 필터 영역 */}
          <div className="filter-section">
            <div className="search-input-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                className="search-input" 
                placeholder="할 일 검색..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="filter-category-buttons">
              {['전체', ...CATEGORIES].map((cat) => (
                <button 
                  key={`filter-${cat}`}
                  className={`filter-btn ${cat !== '전체' ? `cat-${cat}` : 'cat-all'} ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 4. 할 일 목록 */}
          <TodoList 
            todos={filteredTodos} 
            totalTodosCount={todos.length} 
            onDelete={handleDelete} 
            onToggle={handleToggle} 
            onEdit={handleEdit}
          />
          
        </div>
      </div>
    </div>
  );
};

export default App;