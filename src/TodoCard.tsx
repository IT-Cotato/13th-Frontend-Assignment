function TodoCard({ text, completed, onDelete, onToggle }: {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
}) {
  return (
    <div className="card">
      <div
        className={`checkbox ${completed ? "done" : ""}`}
        onClick={onToggle}
      >
        {completed && (
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
          >
            <path
              d="M1 5L5 9L13 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

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