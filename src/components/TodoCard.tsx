import React from 'react';

interface TodoCardProps {
  content: string;
  isDone: boolean;
}

const TodoCard = ({ content, isDone }: TodoCardProps) => {
  return (
    <div className={`todo-card ${isDone ? 'done-card' : ''}`}>
      <div className="checkbox-icon">
        {isDone ? (
          // 🔵 완료 상태 (파란색 채워진 원 + 흰색 체크)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#A4C5FD"/>
            <path d="M7 12.5L10 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          // ⚪ 미완료 상태 (회색 테두리 빈 원)
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#E5E7EB" strokeWidth="2"/>
          </svg>
        )}
      </div>

      <p className={`card-text ${isDone ? 'done-text' : ''}`}>
        {content}
      </p>
    </div>
  );
};

export default TodoCard;