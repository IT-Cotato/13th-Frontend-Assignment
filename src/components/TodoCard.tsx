import { useState } from "react";
import CheckBox from "./CheckBox";
import type { Todo } from "../types/todo";

export default function TodoCard({
  todo,
  handleCompletedStatus,
  handleUpdateTodo,
  handleDeleteTodo,
}: {
  todo: Todo;
  handleCompletedStatus: (targetId: number) => void;
  handleUpdateTodo: (updatedId: number, updatedText: string) => void;
  handleDeleteTodo: (deletedId: number) => void;
}) {
  const { id, text, completed, category } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [updateText, setUpdateText] = useState(text);

  const handleSave = () => {
    handleUpdateTodo(id, updateText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const styles: {[key: string]: string} = {
    공부: "bg-study/13 border-study text-study",
    운동: "bg-exercise/13 border-exercise text-exercise",
    업무: "bg-work/13 border-work text-work",
    개인: "bg-personal/13 border-personal text-personal"
  };

  if (isEditing) {
    return (
      <li className="item editing">
        <CheckBox
          completed={todo.completed}
          onToggle={() => handleCompletedStatus(todo.id)}
        />
        <div className="itemInfo flex flex-col gap-3">
          <input
            className="px-3 py-2 rounded-lg border-2 border-blue-500 ring-4 ring-blue-500 outline-none"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
          />
          <div className={`w-fit px-3 py-1 rounded-full ${styles[todo.category]}`}>{todo.category}</div>
        </div>
        <div className="flex gap-2 items-center ml-auto">
          <button
            className="saveBtn bg-blue-500 text-white px-4 py-2.5 rounded-lg cursor-pointer"
            onClick={handleSave}
          >
            저장
          </button>
          <button className="cancelBtn px-4 py-2.5 rounded-lg border-2 border-gray-200 cursor-pointer" onClick={handleCancel}>
            취소
          </button>
        </div>
      </li>
    );
  }

  return (
    <li className={`item ${completed ? "checked" : ""}`}>
      <CheckBox
        completed={completed}
        onToggle={() => handleCompletedStatus(id)}
      />
      <div className="itemInfo flex flex-col gap-3">
        <div className="text">{completed ? <del>{text}</del> : text}</div>
        <div className={`w-fit px-3 py-1 rounded-full ${styles[category]}`}>{category}</div>
      </div>
      <div className="btnContainer">
        <button className="updateBtn" onClick={() => setIsEditing(true)} aria-label="할 일 수정">
          ✏️
        </button>
        <button className="delBtn" onClick={() => handleDeleteTodo(id)} aria-label="할 일 삭제">
          🗑
        </button>
      </div>
    </li>
  );
}
