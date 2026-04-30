function TodoCard({ text, completed, onDelete, onToggle }: {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}) {
  return (
    <div className="card">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="checkbox"
      />

      <div className={`card-text ${completed ? "done" : ""}`}>
        {text}
      </div>

      <button 
        className="delete-button" 
        onClick={onDelete}
        aria-label="할 일 삭제"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoCard;