import './TodoCard.css';
import checkIcon from '../assets/check.svg';
import type { TodoCategory } from '../types/todo';

type Props = {
  text: string;
  completed: boolean;
  category: TodoCategory;

  isEditing: boolean;
  editingText: string;
  onChangeEditText: (v: string) => void;

  onStartEdit: () => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;

  onToggle: () => void;
  onDelete: () => void;
};

function TodoCard({ text, completed, category, isEditing, editingText, onChangeEditText, onStartEdit, onSaveEdit, onCancelEdit, onToggle, onDelete }: Props) {
  return (

    <div className={`card ${completed ? 'done' : ''}`}>
      <div className="card-content">
        <label className="todo-check-label">
          <input
            type="checkbox"
            checked={completed}
            onChange={onToggle}
            className="checkbox-hidden"
          />

          <span className={`check-circle ${completed ? 'checked' : ''}`}>
            {completed && <img src={checkIcon} className="check-img" alt="" />}
          </span>

          {!isEditing && (
            <>
              <span className="card-done">{text}</span>
              <span className={`category-tag category-${category}`}>
                {category}
              </span>
            </>
          )}
        </label>

        {isEditing && (
          <div className="edit-area">
            <input
              className="edit-input"
              aria-label="할 일 수정하는 입력창"
              value={editingText}
              onChange={(e) => onChangeEditText(e.target.value)}
            />

            <span className={`category-tag category-${category}`}>
              {category}
            </span>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="edit-actions">
          <button className="save-button" onClick={onSaveEdit} disabled={!editingText.trim()}>저장</button>
          <button className="cancel-button" onClick={onCancelEdit}>취소</button>
        </div>
      ) : (
        <div className="card-actions">
          <button onClick={onStartEdit} aria-label='할 일 수정'>✏️</button>
          <button onClick={onDelete} aria-label='할 일 삭제'>🗑</button>
        </div>
      )}
    </div>
  );
}

export default TodoCard;