import { useState } from 'react';

interface TodoCardProps {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoCard = ({ id, text, completed, category, onDelete, onToggle, onEdit }: TodoCardProps) => {
  // 인라인 수정을 위한 로컬 상태
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // 저장 버튼 클릭 시
  const handleSave = () => {
    if (editText.trim() === "") return;
    onEdit(id, editText); // 부모로부터 받은 onEdit 함수 호출
    setIsEditing(false); // 수정 모드 종료
  };

  // 취소 버튼 클릭 시
  const handleCancel = () => {
    setEditText(text); // 원래 텍스트로 되돌리기
    setIsEditing(false); // 수정 모드 종료
  };

  return (
    <div className={`todo-card ${completed ? 'done-card' : ''}`}>
      
      <div className="todo-info">
        {/* 수정 모드가 아닐 때만 체크박스 표시 */}
        {!isEditing && (
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
        )}

        <div className="todo-content">
          {/* 조건부 렌더링: 수정 모드일 때와 아닐 때 */}
          {isEditing ? (
            <input
              type="text"
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
          ) : (
            <p className={`card-text ${completed ? 'done-text' : ''}`}>
              {text}
            </p>
          )}
          
          {/* 카테고리 태그 (수정 중에도 보임) */}
          <span className={`tag-label tag-${category}`}>
            {category}
          </span>
        </div>
      </div>

      {/* 우측 버튼 영역 */}
      <div className="card-actions">
        {isEditing ? (
          <>
            <button className="action-btn save-btn" onClick={handleSave}>저장</button>
            <button className="action-btn cancel-btn" onClick={handleCancel}>취소</button>
          </>
        ) : (
          <>
            <button className="action-btn edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
            <button className="action-btn delete-btn" onClick={onDelete}>🗑</button>
          </>
        )}
      </div>

    </div>
  );
};

export default TodoCard;