import { useState } from "react";
import CheckBox from "./CheckBox";
import type { Todo } from "../types/todo";
import { CATEGORY_OPTIONS } from "../data/categoryOption";

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

  const isDisabled = updateText.trim() === "";

  const handleSave = () => {
    handleUpdateTodo(id, updateText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const categoryConfig = CATEGORY_OPTIONS.find(
    (option) => option.value === category,
  );
  const tagClassName = categoryConfig
    ? categoryConfig.tagClass
    : "bg-gray/13 text-gray";

  // 수정 모드
  if (isEditing) {
    return (
      <li className="item editing">
        <CheckBox
          completed={completed}
          onToggle={() => handleCompletedStatus(id)}
        />
        <div className="itemInfo flex flex-col gap-3">
          <input
            className="px-3 py-2 rounded-lg border-2 border-blue-500 ring-4 ring-blue-500 outline-none"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            aria-label="할 일 수정 입력창"
          />
          <div className={`w-fit px-3 py-1 rounded-full ${tagClassName}`}>
            {category}
          </div>
        </div>
        <div className="flex gap-2 items-center ml-auto">
          <button
            disabled={isDisabled}
            className="saveBtn bg-blue-500 text-white px-4 py-2.5 rounded-lg cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed"
            onClick={handleSave}
          >
            저장
          </button>
          <button
            className="cancelBtn px-4 py-2.5 rounded-lg border-2 border-gray-200 cursor-pointer"
            onClick={handleCancel}
          >
            취소
          </button>
        </div>
      </li>
    );
  }

  // 일반 모드
  return (
    <li className={`item ${completed ? "checked" : ""}`}>
      <CheckBox
        completed={completed}
        onToggle={() => handleCompletedStatus(id)}
      />
      <div className="itemInfo flex flex-col gap-3">
        <div className="text">{completed ? <del>{text}</del> : text}</div>
        <div className={`w-fit px-3 py-1 rounded-full ${tagClassName}`}>
          {category}
        </div>
      </div>
      <div className="btnContainer">
        <button
          className="updateBtn"
          onClick={() => setIsEditing(true)}
          aria-label="할 일 수정"
        >
          ✏️
        </button>
        <button
          className="delBtn"
          onClick={() => handleDeleteTodo(id)}
          aria-label="할 일 삭제"
        >
          🗑
        </button>
      </div>
    </li>
  );
}
