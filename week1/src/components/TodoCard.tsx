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
  onToggle: () => void;
  onDelete?: () => void;
}

export default function TodoCard({ text, checked, category, onToggle, onDelete }: TodoCardProps) {
  return (
    <div className={`todo-item ${checked ? "is-checked" : ""}`}>
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

      {onDelete ? (
        <button
          type="button"
          className="todo-delete-button"
          onClick={onDelete}
          aria-label={`${text} 삭제`}
        >
          🗑
        </button>
      ) : null}
    </div>
  );
}
