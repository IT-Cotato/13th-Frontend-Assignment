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
}

export default function TodoCard({ id, task, isCompleted, category, onToggle, onDelete }: TodoCardProps) {

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

  const textStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    color: isCompleted ? 'var(--text-secondary)' : 'var(--text)',
    textDecoration: isCompleted ? 'line-through' : 'none', 
    transition: 'color 0.2s ease',
  };

  return (
    <button
      type="button"
      className="todo-card" 
      onClick={() => onToggle(id)}
      aria-pressed={isCompleted} 
    >

      <div style={contentSectionStyle}>
        <div style={checkboxStyle}>
          {isCompleted && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
        <div style={textContainerStyle}>
          <span style={textStyle}>{task}</span>
          <CategoryBadge category={category} />
        </div>
      </div>

      <button 
        className="delete-button"
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(id);
        }}
        aria-label="삭제"
      >
        🗑
      </button>
    </button>
  );
}