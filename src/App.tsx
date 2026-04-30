import { useState } from "react";
import type Todo from "./types/todo";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import "./App.css";

const fixedTodos: Todo[] = [
  { id: 1, text: "리액트 공식문서 읽기", isCompleted: true, category: "공부" },
  { id: 2, text: "알고리즘 문제 풀기", isCompleted: true, category: "공부" },
  { id: 3, text: "운동 30분 하기", isCompleted: false, category: "운동" },
  { id: 4, text: "프로젝트 회의 준비", isCompleted: false, category: "업무" },
  { id: 5, text: "장보기 하기", isCompleted: false, category: "개인" },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(fixedTodos);
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<Todo["category"]>("공부");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      isCompleted: false,
      category: selectedCategory,
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
    setSelectedCategory("공부");
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const incompleteCount = totalCount - completedCount;

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader
          totalCount={totalCount}
          completedCount={completedCount}
          incompleteCount={incompleteCount}
        />
      </div>

      <form className="inputContainer" onSubmit={handleAddTodo}>
        <input
          className="todoInput"
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="addButton" type="submit">
          추가
        </button>
      </form>

      <div className="category-selector">
        {(["공부", "운동", "개인", "업무"] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-button category-${cat} ${selectedCategory === cat ? "selected" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container">
        <TodoList
          todos={todos}
          onDelete={handleDeleteTodo}
          onToggle={handleToggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
