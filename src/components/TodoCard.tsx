import { useEffect, useRef } from "react";
import checkIcon from "../assets/check.svg";

export type Category = "공부" | "운동" | "개인" | "업무";

const CATEGORY_STYLE: Record<Category, string> = {
  공부: "tag--study",
  운동: "tag--exercise",
  개인: "tag--personal",
  업무: "tag--work",
};

type TodoCardProps = {
  text: string;
  completed: boolean;
  category: Category;
  isEditing: boolean;
  editingText: string;
  onDelete: () => void;
  onToggle: () => void;
  onEditStart: () => void;
  onEditChange: (value: string) => void;
  onEditSave: () => void;
  onEditCancel: () => void;
};

export default function TodoCard({
  text, completed, category,
  isEditing, editingText,
  onDelete, onToggle,
  onEditStart, onEditChange, onEditSave, onEditCancel,
}: TodoCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // 편집 모드 진입 시 input에 자동 포커스
  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  return (
    <div className={`todo-card ${isEditing ? "todo-card--editing" : ""}`}>
      <label className="todo-card__check-label">
        <input
          type="checkbox"
          className="todo-card__check-input"
          checked={completed}
          onChange={onToggle}
        />
        <span className={`todo-card__check ${completed ? "todo-card__check--done" : ""}`}>
          {completed && <img src={checkIcon} alt="" className="todo-card__check-icon" />}
        </span>
      </label>

      {isEditing ? (
        // 편집 모드
        <div className="todo-card__body">
          <div className="todo-card__edit-row">
            <input
              ref={inputRef}
              className="todo-card__edit-input"
              value={editingText}
              onChange={(e) => onEditChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") onEditSave();
                if (e.key === "Escape") onEditCancel();
              }}
            />
            <button className="save-button" onClick={onEditSave}>저장</button>
            <button className="cancel-button" onClick={onEditCancel}>취소</button>
          </div>
          {/* 카테고리 태그는 아래에 */}
          <span className={`todo-card__tag ${CATEGORY_STYLE[category]}`}>
            {category}
          </span>
        </div>
      ) : (
        // 일반 모드
        <div className="todo-card__body">
          <span className={`todo-card__text ${completed ? "todo-card__text--done" : ""}`}>
            {text}
          </span>
          <span className={`todo-card__tag ${CATEGORY_STYLE[category]}`}>
            {category}
          </span>
        </div>
      )}

      {!isEditing && (
        <div className="todo-card__actions">
          <button className="delete-button" onClick={onEditStart} aria-label="수정">
            ✏️
          </button>
          <button className="delete-button" onClick={onDelete} aria-label="삭제">
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}