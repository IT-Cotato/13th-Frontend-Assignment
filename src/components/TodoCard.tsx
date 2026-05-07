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

const TodoCard = ({ text, completed, category, onDelete, onToggle, onEdit }: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(text);

  const handleSave = () => {
    if (editValue.trim() === "") return; 
    onEdit(editValue); 
    setIsEditing(false); 
  };

  const handleCancel = () => {
    setEditValue(text); 
    setIsEditing(false); 
  };

  if (isEditing) {
    return (
      <div className="todo-card">
        <span className={`category-badge badge-${category}`}>{category}</span> 
        <input 
          className="todo-input edit-inline-input" 
          value={editValue} 
          onChange={(e) => setEditValue(e.target.value)}
          autoFocus 
        />
        <div className="action-buttons">
          <button className="text-btn save-btn" onClick={handleSave}>저장</button>
          <button className="text-btn cancel-btn" onClick={handleCancel}>취소</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      <div className="todo-info">
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
        
        <span className={`category-badge badge-${category}`}>{category}</span>
        
        <p className={`card-text ${completed ? 'done-text' : ''}`}>
          {text}
        </p>
      </div>

      <div className="action-buttons">
        <button className="icon-btn" onClick={() => setIsEditing(true)}>✏️</button>
        <button className="icon-btn" onClick={onDelete}>🗑</button>
      </div>
    </div>
  );
};

export default TodoCard;