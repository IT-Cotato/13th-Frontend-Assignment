import EmptyCircleIcon from "../icons/EmptyCircleIcon"
import CheckIcon from "../icons/CheckIcon"
import { useState } from "react";

const categoryTagStyles: Record<string, string> = {
  공부: "bg-[#3B82F6]/[0.125] text-[#3B82F6]",
  운동: "bg-[#22C55E]/[0.125] text-[#22C55E]",
  개인: "bg-[#F59E0B]/[0.125] text-[#F59E0B]",
  업무: "bg-[#A855F7]/[0.125] text-[#A855F7]",
};

function Item({todo, isCompleted, category, onToggle}: {todo: string; isCompleted: boolean; category: string; onToggle: () => void }) {
  return(
    <label className="flex items-center gap-[12px] cursor-pointer">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="sr-only"
      />

      {isCompleted ? <CheckIcon /> : <EmptyCircleIcon />} 

      <div className={`flex flex-col gap-[12px] text-[#1F2937] ${isCompleted ? "opacity-50" : ""}`}>
        {isCompleted ? <del>{todo}</del> : <span>{todo}</span>}

        <span className={`w-fit rounded-full px-[12px] py-[4px] text-[12px] ${categoryTagStyles[category]}`}>
          {category}
        </span>
      </div>
  </label>
  )
}

export default function TodoCard({todo, isCompleted, category, onToggle, onDelete, onUpdate }: {todo: string; isCompleted: boolean; category: string; onToggle: () => void; onDelete: () => void; onUpdate: (newText: string) => void; }) {
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

              <div className="flex flex-1 flex-col gap-[6px]">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full rounded-[8px] border-[2px] border-[#3B82F6] px-[12px] py-[8px] text-[14px] text-[#1F2937] outline-none"
                />

                <span className={`w-fit rounded-full px-[12px] py-[4px] text-[12px] ${categoryTagStyles[category]}`}>
                  {category}
                </span>
              </div>
            </>
          ) : (
            <Item
              todo={todo}
              isCompleted={isCompleted}
              category={category}
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
