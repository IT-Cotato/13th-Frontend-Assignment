import CheckIcon from "./CheckIcon";

export default function TodoCard({
  text,
  isCompleted,
  onDelete,
}: {
  text: string;
  isCompleted: boolean;
  onDelete: () => void;
}) {
  return (
    <div className="TodoCard">
      <div className={`TodoCard-checkbox ${isCompleted ? "checked" : ""}`}>
        {isCompleted && <CheckIcon />}
      </div>
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
