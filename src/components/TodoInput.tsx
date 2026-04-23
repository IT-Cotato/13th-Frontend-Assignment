import { useState } from "react";

export default function TodoInput({
  handleAddTodo,
}: {
  handleAddTodo: (newTodoText: string) => void;
}) {
  const [text, setText] = useState("");

  function handleClick() {
    if (text.length === 0) {
      return;
    }

    handleAddTodo(text);

    setText("");
  }

  return (
    <div className="toDoInputContainer">
      <input
        className="toDoInput"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="toDoInputBtn" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
