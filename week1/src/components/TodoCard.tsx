import type { TodoCategory } from "../types";

const CATEGORY_LABELS: Record<TodoCategory, string> = {
  study: "공부",
  exercise: "운동",
  personal: "개인",
  work: "업무",
};

interface TodoCardProps {
  text: string;
  checked: boolean;
  category: TodoCategory;
  isEditing?: boolean;
  editingText?: string;
  onEditingTextChange?: (text: string) => void;
  onEditStart?: () => void;
  onEditSave?: () => void;
  onEditCancel?: () => void;
  onToggle: () => void;
  onDelete?: () => void;
}

export default function TodoCard({
  text,
  checked,
  category,
  isEditing = false,
  editingText = "",
  onEditingTextChange,
  onEditStart,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
}: TodoCardProps) {
  return (
    <div className={`todo-item ${checked ? "is-checked" : ""} ${isEditing ? "is-editing" : ""}`}>
      {isEditing ? (
        <>
          <div className="todo-edit-row">
            <span className={`todo-checkbox ${checked ? "is-checked" : ""}`} aria-hidden="true">
              {checked ? "✓" : ""}
            </span>
            <input
              className="todo-edit-input"
              type="text"
              value={editingText}
              onChange={(event) => onEditingTextChange?.(event.target.value)}
              aria-label={`${text} 수정`}
              autoFocus
            />
            <div className="todo-edit-actions">
              <button
                type="button"
                className="todo-save-button"
                onClick={onEditSave}
                disabled={!editingText.trim()}
              >
                저장
              </button>
              <button type="button" className="todo-cancel-button" onClick={onEditCancel}>
                취소
              </button>
            </div>
          </div>
          <span className={`todo-category-badge is-${category}`}>
            {CATEGORY_LABELS[category]}
          </span>
        </>
      ) : (
        <label className="todo-item-main">
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="sr-only"
          />
          <span className={`todo-checkbox ${checked ? "is-checked" : ""}`} aria-hidden="true">
            {checked ? "✓" : ""}
          </span>
          <span className="todo-content">
            <span className="todo-text">{text}</span>
            <span className={`todo-category-badge is-${category}`}>
              {CATEGORY_LABELS[category]}
            </span>
          </span>
        </label>
      )}

      {!isEditing ? (
        <div className="todo-actions">
          {onEditStart ? (
            <button
              type="button"
              className="todo-icon-button"
              onClick={onEditStart}
              aria-label={`${text} 수정`}
            >
              ✏️
            </button>
          ) : null}
          {onDelete ? (
            <button
              type="button"
              className="todo-icon-button"
              onClick={onDelete}
              aria-label={`${text} 삭제`}
            >
              🗑
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
