// src/components/TodoCard.tsx

interface TodoCardProps {
    task: string;
    description: string; // 🌟 새로 추가하는 상세 설명 속성
    isDone: boolean;
  }
  
  export default function TodoCard({ task, description, isDone }: TodoCardProps) {
    return (
      <div className="todo-card">
        {/* 1. 체크박스 영역 (기존 코드 유지) */}
        <div className={`checkbox-container ${isDone ? 'checked' : 'unchecked'}`}>
          {isDone && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
  
        {/* 2. 🌟 텍스트 영역 (새로운 구조): 제목과 설명을 세로로 나열 */}
        <div className="task-content">
          {/* 제목 글씨 (피그마의 '검은 글씨 + 굵게' 스타일 반영) */}
          <h3 className={`task-title ${isDone ? 'done-text' : ''}`}>
            {task}
          </h3>
          
          {/* 상세 설명 (피그마의 '회색 글씨' 스타일 반영) */}
          <p className="task-description">
            {description}
          </p>
        </div>
      </div>
    );
  }