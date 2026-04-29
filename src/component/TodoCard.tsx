import checkIcon from "../assets/Check.svg";
import { CATEGORY_STYLES, type CategoryType } from "../constants/category";
import { useState } from "react";
interface TodoCardProps {
  content: string;
  checked: boolean;
  category: CategoryType;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: (newContent: string) => void;
}

export default function TodoCard({ content, checked, category, onToggle, onDelete, onUpdate }: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(content);

  const handleSave = () => {
    if (editValue.trim().length === 0) return;
    onUpdate(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(content);
    setIsEditing(false);
  };

  const style = CATEGORY_STYLES[category]
  return (
    <div className="flex p-4 items-center justify-between self-stretch bg-card rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">

      <div className="flex gap-[10px] items-center">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <input 
            type="checkbox"
            checked={checked} 
            onChange={onToggle}
            className={`appearance-none w-6 h-6 border-[2px] rounded-full transition-colors 
              ${ checked ? 'bg-primary/40 border-transparent' : 'bg-white border-border'}
            `}
          />
          {checked && (
            <img src={checkIcon} alt="done" className="absolute w-[14px] h-[10px] pointer-events-none" />
          )}
        </div>

        <div className="flex flex-col w-[442px] gap-2 items-start justify-center">
          {isEditing ? (
            <input 
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full h-[41px] px-2 py-3 items-start rounded-[8px] border-2 border-primary text-body text-text bg-transparent ring-4 ring-primary"
            />
          ) : (
            <p className={`text-body leading-[21px] transition-all ${
              checked ? 'line-through text-gray-400 opacity-60' : 'text-gray-900'
            }`}
            >
              {content}
            </p>
          )}
          <span className={`px-3 py-1 rounded-full text-caption ${style.tag}`}>
            {category}
          </span>
        </div>
      </div>

      <div className={`flex gap-2 items-center justify-center flex-shrink-0 ${isEditing ? 'self-start' : 'self-center'}`}>
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="flex items-center justify-center px-4 py-[10px] rounded-[8px] bg-primary text-white text-caption"
            >
              저장
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center justify-center px-4 py-[10px] rounded-[8px] bg-white border-2 border-border text-secondary text-caption"
            >
              취소
            </button>
          </>

        ) : (
          <>
            <button 
              onClick={() => setIsEditing(true)}
              aria-label="할 일 수정"
              className="w-10 h-10 flex items-center justify-center rounded-[8px] text-[20px] leading-[30px]"
            >
              ✏️
            </button>
            <button 
              onClick={onDelete}
              aria-label="할 일 삭제"
              className="w-10 h-10 flex items-center justify-center rounded-[8px] text-[20px] leading-[30px]"
            >
              🗑️
            </button>
          </>
        )}
      </div>
      
    </div>
  )
}