import { useState } from "react";

export default function TodoInput({
  handleAddTodo,
}: {
  handleAddTodo: (newTodoText: string) => void;
}) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {

    e.preventDefault();
    
    if (text.length === 0 || text === null) {
      return;
    }

    handleAddTodo(text);

    setText("");
  }

  return (
    <form className="toDoInputContainer" onSubmit={handleSubmit}>
      <input
        className="toDoInput"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="toDoInputBtn" type="submit">
        추가
      </button>
    </form>
  );
}
