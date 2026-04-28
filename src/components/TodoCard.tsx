import EmptyCircleIcon from "../icons/EmptyCircleIcon"
import CheckIcon from "../icons/CheckIcon"
import { useState } from "react";



function Item({todo, isCompleted, onToggle}: {todo: string; isCompleted: boolean; onToggle: () => void }) {
  return(
    <label className="flex items-center gap-[12px] cursor-pointer">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="sr-only"
      />

      <div className={`flex items-center gap-[12px] text-[#1F2937] ${isCompleted ? "opacity-50" : ""}`}>
        {isCompleted ? <CheckIcon /> : <EmptyCircleIcon />}
        {isCompleted ? <del>{todo}</del> : <span>{todo}</span>}
      </div>
  </label>
  )
}

export default function TodoCard({todo, isCompleted, onToggle, onDelete, onUpdate }: {todo: string;isCompleted: boolean; onToggle: () => void; onDelete: () => void; onUpdate: (newText: string) => void; }) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ editText, setEditText ] = useState(todo); 

  function handleStartEdit() {
    setIsEditing(true);
    setEditText(todo);
  }

  function handleSave() {
    const trimmed = editText.trim();

    if (!trimmed) return;

    onUpdate(trimmed);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setEditText(todo);
  }

  return (
    <li className="flex w-full items-center justify-between gap-[10px] p-4 rounded-[12px] bg-white shadow-sm">
      <div className="flex flex-1 items-center gap-[12px] text-[14px] leading-[21px] text-[#1F2937]">
        {isEditing ? (
          <>
            {isCompleted ? <CheckIcon /> : <EmptyCircleIcon />}

            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 rounded-[8px] border-[2px] border-[#3B82F6] px-[12px] py-[8px] text-[14px] text-[#1F2937] outline-none"
            />
          </>
        ) : (
          <Item
            todo={todo}
            isCompleted={isCompleted}
            onToggle={onToggle}
          />
        )}
      </div>

      <div className="flex items-center gap-[8px]">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="rounded-[8px] bg-[#3B82F6] px-[16px] py-[10px] text-[12px] text-white"
            >
              저장
            </button>

            <button
              onClick={handleCancel}
              className="rounded-[8px] border-[2px] border-[#E5E7EB] px-[16px] py-[10px] text-[12px] text-[#6B7280]"
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleStartEdit}
              className="cursor-pointer text-[18px]"
              aria-label="할 일 수정"
            >
              ✏️
            </button>

            <button
              onClick={onDelete}
              className="cursor-pointer text-[18px]"
              aria-label="할 일 삭제"
            >
              🗑
            </button>
          </>
        )}
      </div>
    </li>
  )
}
