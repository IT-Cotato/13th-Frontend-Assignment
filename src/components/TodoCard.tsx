import { useState } from 'react';
import './TodoCard.css';
import './TodoInput.css';
import CategoryBadge from './CategoryBadge';
import type { Category } from '../types/todo';

interface TodoCardProps {
  id: string; 
  task: string;
  isCompleted: boolean;
  category: Category; 
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTask: string) => void;
}

export default function TodoCard({ 
  id, 
  task, 
  isCompleted, 
  category, 
  onToggle, 
  onDelete, 
  onUpdate 
}: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);

  const handleUpdate = () => {
    const trimmedText = editText.trim();
    if (trimmedText) {
      onUpdate(id, trimmedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(task);
    setIsEditing(false);
  };

  const contentSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flex: 1, 
  };

  const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-start',
    flex: 1,
    marginRight: '12px', 
  };

  const checkboxStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: `2px solid ${isCompleted ? 'var(--primary)' : 'var(--border)'}`,
    backgroundColor: isCompleted ? 'var(--primary)' : 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    transition: 'all 0.2s ease',
    cursor: isEditing ? 'default' : 'pointer',
    marginRight: '12px',
    opacity: isEditing ? 0.4 : 1,
  };

  const textStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    color: isCompleted ? 'var(--text-secondary)' : 'var(--text)',
    textDecoration: isCompleted ? 'line-through' : 'none',
    transition: 'color 0.2s ease',
  };


  return (
    <div className="todo-card">
      <div style={contentSectionStyle}>
        <input
          type="checkbox"
          id={id}
          className="todo-checkbox"
          checked={isCompleted}
          onChange={() => onToggle(id)}
          disabled={isEditing}
        />
        <label htmlFor={id} className="todo-checkbox-label">
          <span style={checkboxStyle}>
            {isCompleted && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
          <div style={textContainerStyle}>
            {isEditing ? (
              <input
                className="edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
                autoFocus
              />
            ) : (
              <span style={textStyle}>{task}</span>
            )}
            <CategoryBadge category={category} />
          </div>
        </label>
      </div>

      <div className="button-group" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {isEditing ? (
          <>
            <button 
              className="todo-add-button" 
              onClick={handleUpdate}
              style={{ padding: '6px 16px', height: '38px', minWidth: '52px' }} 
            >
              저장
            </button>
            <button 
              className="cancel-button" 
              onClick={handleCancel}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button 
              className="action-button"
              onClick={() => setIsEditing(true)}
              aria-label="수정"
            >
              ✏️
            </button>
            <button 
              className="action-button"
              onClick={() => onDelete(id)}
              aria-label="삭제"
            >
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  );
}