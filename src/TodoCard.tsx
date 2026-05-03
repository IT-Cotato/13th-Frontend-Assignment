import CheckIcon from "./CheckIcon";
import type Todo from "./types/todo";

export default function TodoCard({
  text,
  isCompleted,
  category,
  isEditing,
  editingText,
  onDelete,
  onToggle,
  onEditStart,
  onEditSave,
  onEditCancel,
  onEditTextChange,
}: Pick<Todo, "text" | "isCompleted" | "category"> & {
  isEditing: boolean;
  editingText: string;
  onDelete: () => void;
  onToggle: () => void;
  onEditStart: () => void;
  onEditSave: () => void;
  onEditCancel: () => void;
  onEditTextChange: (text: string) => void;
}) {
  return (
    <div className="TodoCard">
      <label className="TodoCard-checkbox-wrapper">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          aria-label={isCompleted ? "할 일 완료 취소" : "할 일 완료"}
          className="TodoCard-checkbox-input"
        />
        <div className={`TodoCard-checkbox ${isCompleted ? "checked" : ""}`}>
          {isCompleted && <CheckIcon />}
        </div>
      </label>

      {isEditing ? (
        <div className="TodoCard-edit">
          <div className="TodoCard-edit-input-wrapper">
            <input
              className="TodoCard-edit-input"
              type="text"
              value={editingText}
              onChange={(e) => onEditTextChange(e.target.value)}
              autoFocus
            />
            <span className={`category-tag category-${category}`}>
              {category}
            </span>
          </div>
          <div className="TodoCard-edit-buttons">
            <button className="saveButton" onClick={onEditSave}>
              저장
            </button>
            <button className="cancelButton" onClick={onEditCancel}>
              취소
            </button>
          </div>
        </div>
      ) : (
        <div className="TodoCard-content">
          <div className={`TodoCard-text ${isCompleted ? "completed" : ""}`}>
            {text}
          </div>
          <span className={`category-tag category-${category}`}>
            {category}
          </span>
        </div>
      )}

      {!isEditing && (
        <div className="TodoCard-buttons">
          <button
            className="editButton"
            onClick={onEditStart}
            aria-label="할 일 수정"
          >
            ✏️
          </button>
          <button
            className="deleteButton"
            onClick={onDelete}
            aria-label="할 일 삭제"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
