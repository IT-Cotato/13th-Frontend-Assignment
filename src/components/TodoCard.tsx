import '../css/TodoCard.css';
import checkIcon from '../assets/checkIcon.svg';
import type { TodoCategory } from '../types/todo.types';

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
  category: TodoCategory;
  isEditing: boolean;
  editingText: string;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  onEditStart: (id: number, text: string) => void;
  onEditChange: (text: string) => void;
  onEditSave: (id: number) => void;
  onEditCancel: () => void;
};

export default function TodoCard({
  id,
  text,
  isChecked,
  category,
  isEditing,
  editingText,
  onCheck,
  onDelete,
  onEditStart,
  onEditChange,
  onEditSave,
  onEditCancel,
}: Props) {
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEditSave(id);
  };

  return (
    <li className={`card ${isEditing ? 'is-editing' : ''}`}>
      <div className="card-main">
        <input
          className="card-input"
          id={`todo-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheck(id)}
          disabled={isEditing}
        />
        <label className="card-checkbox-label" htmlFor={`todo-${id}`}>
          <span className="card-checkbox-ui">
            {isChecked ? (
              <img src={checkIcon} alt="" className="card-checkbox-icon" />
            ) : null}
          </span>
        </label>

        {isEditing ? (
          <form className="card-edit-form" onSubmit={handleEditSubmit}>
            <input
              className="card-edit-input"
              type="text"
              value={editingText}
              onChange={(e) => onEditChange(e.target.value)}
              autoFocus
            />
            <span className={`category-tag category-${category}`}>
              {category}
            </span>
          </form>
        ) : (
          <div className="card-content">
            <span className="card-text">{text}</span>
            <span className={`category-tag category-${category}`}>
              {category}
            </span>
          </div>
        )}
      </div>

      {isEditing ? (
        <div className="card-actions">
          <button
            type="button"
            className="card-save-button"
            onClick={() => onEditSave(id)}
          >
            저장
          </button>
          <button
            type="button"
            className="card-cancel-button"
            onClick={onEditCancel}
          >
            취소
          </button>
        </div>
      ) : (
        <div className="card-actions">
          <button
            type="button"
            className="card-icon-button"
            aria-label="Todo-edit"
            onClick={() => onEditStart(id, text)}
          >
            ✏️
          </button>
          <button
            type="button"
            className="card-icon-button"
            aria-label="Todo-delete"
            onClick={() => onDelete(id)}
          >
            🗑️
          </button>
        </div>
      )}
    </li>
  );
}
