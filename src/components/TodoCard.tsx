// 부모로부터 onDelete 함수를 받을 수 있도록 타입 추가
interface TodoCardProps {
  text: string;
  completed: boolean;
  onDelete: () => void; 
}

const TodoCard = ({ text, completed, onDelete }: TodoCardProps) => {
  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      
      <div className="todo-info">
        <div className="checkbox-icon">
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

        <p className={`card-text ${completed ? 'done-text' : ''}`}>
          {text}
        </p>
      </div>

      {/* onClick에 넘겨받은 onDelete 연결 */}
      <button className="delete-btn" onClick={onDelete}>
        🗑
      </button>

    </div>
  );
};

export default TodoCard;