interface TodoCardProps {
  text: string;
  checked: boolean;
  onToggle: () => void;
  onDelete?: () => void;
}

export default function TodoCard({ text, checked, onToggle, onDelete }: TodoCardProps) {
  return (
    <div className={`todo-item ${checked ? "is-checked" : ""}`}>
      <button
        type="button"
        className="todo-item-main"
        onClick={onToggle}
        aria-pressed={checked}
      >
        <span className={`todo-checkbox ${checked ? "is-checked" : ""}`} aria-hidden="true">
          {checked ? "✓" : ""}
        </span>
        <span className="todo-text">{text}</span>
      </button>

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
