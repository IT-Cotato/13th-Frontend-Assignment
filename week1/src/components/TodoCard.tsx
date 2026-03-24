interface TodoCardProps {
  text: string;
  checked: boolean;
  onToggle: () => void;
}

export default function TodoCard({ text, checked, onToggle }: TodoCardProps) {
  return (
    <button
      type="button"
      className={`todo-item ${checked ? "is-checked" : ""}`}
      onClick={onToggle}
      aria-pressed={checked}
    >
      <span className={`todo-checkbox ${checked ? "is-checked" : ""}`} aria-hidden="true">
        {checked ? "✓" : ""}
      </span>
      <span className="todo-text">{text}</span>
    </button>
  );
}
