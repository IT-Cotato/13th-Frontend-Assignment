import "./TodoInput.css"
import { useState } from "react";

function TodoInput() {
  const [text, setText] = useState("");

  const handleFocus = () => {
    if (text === "") {
      setText("새로운 할 일");
    }
  };

  return (
    <div className="input-section">
      <input 
        type="text" 
        placeholder="할 일을 입력하세요" 
        className="todo-input" 
        value={text}
        onFocus={handleFocus}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-button">추가</button>
    </div>
  );
}

export default TodoInput;