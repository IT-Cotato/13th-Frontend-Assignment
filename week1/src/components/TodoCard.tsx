interface TodoCardProps {
  text: string;
  checked: boolean;
  onToggle: () => void;
  onDelete?: () => void;
}

export default function TodoCard({ text, checked, onToggle, onDelete }: TodoCardProps) {
  return (
    <div className={`todo-item ${checked ? "is-checked" : ""}`}>
      <label className="todo-item-main">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="sr-only todo-input-control"
        />
        <span className={`todo-checkbox ${checked ? "is-checked" : ""}`} aria-hidden="true">
          {checked ? "✓" : ""}
        </span>
        <span className="todo-text">{text}</span>
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
