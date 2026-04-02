import { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import "./App.css";

const fixedTodos = [
  { id: 1, text: "리액트 공식문서 읽기", isCompleted: true },
  { id: 2, text: "알고리즘 문제 풀기", isCompleted: true },
  { id: 3, text: "운동 30분 하기", isCompleted: false },
  { id: 4, text: "프로젝트 회의 준비", isCompleted: false },
  { id: 5, text: "장보기 하기", isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(fixedTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);

    setInputValue("");
  };

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>

      <div className="inputContainer">
        <input
          className="todoInput"
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={handleAddTodo}>
          추가
        </button>
      </div>

      <div className="container">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
