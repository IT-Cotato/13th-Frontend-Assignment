import { useState } from 'react';
import './TodoCard.css';
import CategoryBadge from './CategoryBadge';
import type { Category } from './CategoryTag';

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
    if (editText.trim()) {
      onUpdate(id, editText);
      setIsEditing(false);
    }
  };

  const contentSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1, 
  };

  const textContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    alignItems: 'flex-start',
    flex: 1,
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
    cursor: 'pointer',
  };

  const textStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    color: isCompleted ? 'var(--text-secondary)' : 'var(--text)',
    textDecoration: isCompleted ? 'line-through' : 'none', 
    transition: 'color 0.2s ease',
  };

  const editInputStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    border: '1px solid var(--primary)',
    borderRadius: '4px',
    padding: '2px 4px',
    width: '100%',
    outline: 'none',
  };

  return (
    <div className="todo-card">
      <div style={contentSectionStyle}>
        <div style={checkboxStyle} onClick={() => onToggle(id)}>
          {isCompleted && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <div style={textContainerStyle}>
          {isEditing ? (
            <input 
              style={editInputStyle}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleUpdate} // 포커스 해제 시 저장
              onKeyDown={(e) => e.key === 'Enter' && handleUpdate()} // 엔터 시 저장
              autoFocus
            />
          ) : (
            <span style={textStyle} onClick={() => onToggle(id)}>{task}</span>
          )}
          <CategoryBadge category={category} />
        </div>
      </div>

      <div className="button-group" style={{ display: 'flex', gap: '8px' }}>
        <button 
          className="action-button"
          onClick={() => setIsEditing(!isEditing)}
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
      </div>
    </div>
  );
}