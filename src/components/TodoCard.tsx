// src/components/TodoCard.tsx

// 부모로부터 onToggle 함수를 받을 수 있도록 타입 추가
interface TodoCardProps {
  text: string;
  completed: boolean;
  onDelete: () => void; 
  onToggle: () => void; // onToggle 추가
}

const TodoCard = ({ text, completed, onDelete, onToggle }: TodoCardProps) => {
  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      
      <div className="todo-info">
        {/*  체크박스 영역에 클릭 이벤트(onToggle) 연결 및 마우스 커서 포인터 스타일 적용 */}
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

        {/* 텍스트 영역을 클릭해도 토글되게 하고 싶다면 여기에도 onClick={onToggle}을 추가 가능*/}
        <p className={`card-text ${completed ? 'done-text' : ''}`}>
          {text}
        </p>
      </div>

      <button className="delete-btn" onClick={onDelete}>
        🗑
      </button>

    </div>
  );
};

export default TodoCard;