// src/components/TodoCard.tsx
import React from 'react';

// props 타입을 정의합니다 (TypeScript용)
interface TodoCardProps {
  content: string;
}

const TodoCard = ({ content }: TodoCardProps) => {
  return (
    <div className="todo-card">
      <p className="card-text">{content}</p>
    </div>
  );
};

export default TodoCard;