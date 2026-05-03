import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css';

// 카테고리 목록 정의
const CATEGORIES = ['공부', '운동', '개인', '업무'];

const App = () => {
  const [inputText, setInputText] = useState("");
  // 새로 추가할 할 일의 카테고리 상태 (기본값: 공부)
  const [selectedCategory, setSelectedCategory] = useState("공부");
  
  // Todo 객체에 category 속성 추가
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공식문서 읽기", completed: true, category: "공부" },
    { id: 2, text: "알고리즘 문제 풀기", completed: true, category: "공부" },
    { id: 3, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 4, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 5, text: "장보기 하기", completed: false, category: "개인" },
  ]);
  
  const [isFocused, setIsFocused] = useState(false);

  // [불변성] Spread 연산자(...)를 활용한 새 항목 추가
  const handleAdd = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
      category: selectedCategory, // 선택된 카테고리 추가
    };
    setTodos([...todos, newTodo]); // 기존 배열을 복사하고 끝에 새 항목 추가
    setInputText("");
  };

  // Enter 키 입력 감지 함수
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 입력 시 이벤트 중복 발생 방지를 위해 isComposing 체크
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleAdd();
    }
  };

  // [불변성] filter를 활용한 삭제
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // [불변성] map을 활용한 완료 상태 토글
  const handleToggle = (id: number) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // [불변성] map을 활용한 텍스트 수정
  const handleEdit = (id: number, newText: string) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app-layout">
      <div className="todo-container">
        <div className="section">
          
          <TodoHeader todos={todos} />
          
          <div className="todo-input-container">
            <input 
              type="text" 
              className={`todo-input ${isFocused ? 'focused-input' : ''}`}
              placeholder="할 일을 입력하세요" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown} // 엔터키 이벤트 연결
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button className="todo-submit-btn" onClick={handleAdd}>
              추가
            </button>
          </div>

          {/* 카테고리 선택 UI */}
          <div className="category-select-container">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-btn category-${cat} ${selectedCategory === cat ? 'selected' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <TodoList 
            todos={todos} 
            onDelete={handleDelete} 
            onToggle={handleToggle} 
            onEdit={handleEdit} // 수정 함수 전달
          />
          
        </div>
      </div>
    </div>
  );
};

export default App;