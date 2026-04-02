import { useState } from 'react';

interface TodoCardProps {
  id: string; 
  task: string;
  isCompleted: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void; 
}

export default function TodoCard({ id, task, isCompleted, onToggle, onDelete }: TodoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    gap: '12px',
    backgroundColor: 'var(--bg-card)',
    borderRadius: '12px',
    boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0 1px 3px 0 rgba(0, 0, 0, 0.10)',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer', 
    transition: 'box-shadow 0.2s ease',
  };

  const contentSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
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
  };


  const deleteButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px', 
    fontSize: '20px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: isHovered ? 1 : 0.5, 
    transition: 'opacity 0.2s',
  };

  const textStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    color: isCompleted ? 'var(--text-secondary)' : 'var(--text)',
    textDecoration: isCompleted ? 'line-through' : 'none', 
    transition: 'color 0.2s ease',
  };

  return (
    <div
      style={cardStyle}
      onClick={() => onToggle(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={contentSectionStyle}>
        <div style={checkboxStyle}>
          {isCompleted && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <span style={textStyle}>{task}</span>
      </div>

      <button 
        style={deleteButtonStyle} 
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(id);
        }}
        aria-label="삭제"
      >
        🗑
      </button>
    </div>
  );
}