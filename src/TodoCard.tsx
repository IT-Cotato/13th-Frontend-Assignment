import CheckIcon from "./CheckIcon";
import { Todo } from "./types/todo";

export default function TodoCard({
  text,
  isCompleted,
  onDelete,
  onToggle,
}: Pick<Todo, "text" | "isCompleted"> & {
  onDelete: () => void;
  onToggle: () => void;
}) {
  return (
    <div className="TodoCard">
      <label className="TodoCard-checkbox-wrapper">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onToggle}
          aria-label={isCompleted ? "할 일 완료 취소" : "할 일 완료"}
          className="TodoCard-checkbox-input"
        />
        <div className={`TodoCard-checkbox ${isCompleted ? "checked" : ""}`}>
          {isCompleted && <CheckIcon />}
        </div>
      </label>

      <div className={`TodoCard-text ${isCompleted ? "completed" : ""}`}>
        {text}
      </div>
      <button
        className="deleteButton"
        onClick={onDelete}
        aria-label="할 일 삭제"
      >
        🗑️
      </button>
    </div>
  );
}
