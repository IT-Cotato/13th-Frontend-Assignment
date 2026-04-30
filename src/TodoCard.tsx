function TodoCard({
  text,
  completed,
  category,
  onDelete,
  onToggle,
}: {
  text: string;
  completed: boolean;
  category: string;
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
            xmlns="http://www.w3.org/2000/svg"
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

      <div className="card-text-container">
        <div className={`card-text ${completed ? "done" : ""}`}>
          {text}
        </div>

        <div className={`category-tag category-${category}`}>
          {category}
        </div>
      </div>

      <button className="delete-button" onClick={onDelete}>
        🗑️
      </button>
    </div>
  );
}

export default TodoCard;