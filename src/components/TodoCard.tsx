// src/components/TodoCard.tsx
import { useState } from 'react';

interface TodoCardProps {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

const TodoCard = ({ id, text, completed, category, onDelete, onToggle, onEdit }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const handleSave = () => {
    
    const trimmedValue = editValue.trim();
    if (trimmedValue === "") return;
    
    onEdit(trimmedValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(text);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className={`todo-card ${completed ? 'done-card' : ''}`}>
        <span className={`category-badge badge-${category}`}>{category}</span>
        <input 
          className="todo-input edit-inline-input"
          value={editValue} 
          onChange={(e) => setEditValue(e.target.value)} 
          autoFocus 
        /> 
        <button className="text-btn save-btn" onClick={handleSave} aria-label="수정 내용 저장">저장</button>
        <button className="text-btn cancel-btn" onClick={handleCancel} aria-label="수정 취소">취소</button>
      </div>
    );
  }

  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={onToggle}
        style={{ cursor: 'pointer', width: '20px', height: '20px' }}
        aria-label={`${text} 완료 상태 토글`}
      />

      <div className="todo-info">
        <span className={`category-badge badge-${category}`}>{category}</span>
        <p className={`card-text ${completed ? 'done-text' : ''}`}>{text}</p>
      </div>

      <div className="action-buttons">
        <button className="icon-btn" onClick={() => setIsEditing(true)} aria-label={`${text} 수정하기`}>✏️</button>
        <button className="icon-btn" onClick={onDelete} aria-label={`${text} 삭제하기`}>🗑️</button>
      </div>
    </div>
  );
};

export default TodoCard;