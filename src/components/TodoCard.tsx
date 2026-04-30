interface TodoCardProps {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  // 내부 state 대신 props로 모두 받아옵니다
  isEditing: boolean;
  editingText: string;
  onDelete: () => void;
  onToggle: () => void;
  onEditChange: (text: string) => void;
  onStartEdit: () => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
}

const TodoCard = ({ 
  text, completed, category, isEditing, editingText, 
  onDelete, onToggle, onEditChange, onStartEdit, onSaveEdit, onCancelEdit 
}: TodoCardProps) => {

  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      
      <div className="todo-info">
        {!isEditing && (
          <div className="checkbox-icon" onClick={onToggle} style={{ cursor: 'pointer' }}>
            {completed ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#A4C5FD"/>
                <path d="M7 12.5L10 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#E5E7EB" strokeWidth="2"/>
              </svg>
            )}
          </div>
        )}

        <div className="todo-content">
          {isEditing ? (
            <input
              type="text"
              className="edit-input"
              value={editingText}
              onChange={(e) => onEditChange(e.target.value)} // 부모의 state 업데이트
              autoFocus
            />
          ) : (
            <p className={`card-text ${completed ? 'done-text' : ''}`}>
              {text}
            </p>
          )}
          
          <span className={`tag-label tag-${category}`}>
            {category}
          </span>
        </div>
      </div>

      <div className="card-actions">
        {isEditing ? (
          <>
            <button className="action-btn save-btn" onClick={onSaveEdit}>저장</button>
            <button className="action-btn cancel-btn" onClick={onCancelEdit}>취소</button>
          </>
        ) : (
          <>
            <button className="action-btn edit-btn" onClick={onStartEdit}>✏️</button>
            <button className="action-btn delete-btn" onClick={onDelete}>🗑</button>
          </>
        )}
      </div>

    </div>
  );
};

export default TodoCard;