import '../css/TodoCard.css';
import checkIcon from '../assets/checkIcon.svg';
import TodoEditForm from './TodoEditForm';
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
  const isEditSaveDisabled = !editingText.trim();

  return (
    <li className={`card ${isEditing ? 'is-editing' : ''}`}>
      <div className="card-main">
        <input
          className="card-input"
          id={`todo-${id}`}
          type="checkbox"
          checked={isChecked}
          aria-label={`${text} 완료 상태 변경`}
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
          <TodoEditForm
            id={id}
            category={category}
            editingText={editingText}
            isSaveDisabled={isEditSaveDisabled}
            onEditChange={onEditChange}
            onEditSave={onEditSave}
          />
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
            disabled={isEditSaveDisabled}
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
