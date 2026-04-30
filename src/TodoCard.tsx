function TodoCard({
  text,
  completed,
  category,
  onDelete,
  onToggle,

  isEditing,
  editText,
  setEditText,
  onEdit,
  onUpdate,
  onCancel,
}: {
  text: string;
  completed: boolean;
  category: string;
  onDelete: () => void;
  onToggle: () => void;

  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  onEdit: () => void;
  onUpdate: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="card">
      <div className={`checkbox ${completed ? "done" : ""}`} onClick={onToggle}>
        {completed && (
          <svg width="14" height="10" viewBox="0 0 14 10">
            <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" />
          </svg>
        )}
      </div>

      <div className="card-text-container">
        {isEditing ? (
          <>
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="todo-input"
            />

            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={onUpdate}>저장</button>
              <button onClick={onCancel}>취소</button>
            </div>
          </>
        ) : (
          <>
            <div className={`card-text ${completed ? "done" : ""}`}>
              {text}
            </div>

            <div className={`category-tag category-${category}`}>
              {category}
            </div>
          </>
        )}
      </div>

      {!isEditing && (
        <div className="card-actions">
          <button className="edit-button" onClick={onEdit}>
            ✏️
          </button>

          <button className="delete-button" onClick={onDelete}>
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoCard;