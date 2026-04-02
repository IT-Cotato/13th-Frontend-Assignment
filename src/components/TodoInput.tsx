import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoInputProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoInput({ todos, setTodos } : TodoInputProps) {
  const [text, setText] = useState("");

  function handleFocus() {
    if (text === "") {
      setText("새로운 할 일");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleClick() {
    if (text.length === 0) {
      return;
    }

    const newIndex = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const newTodo = {
      id: newIndex,
      text: text,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setText("");
  }

  return (
    <div className="toDoInputContainer">
      <input
        className="toDoInput"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
        onFocus={handleFocus}
      ></input>
      <button className="toDoInputBtn" onClick={handleClick}>
        추가
      </button>
    </div>
  );
}
