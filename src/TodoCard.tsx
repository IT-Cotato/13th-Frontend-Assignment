import CheckIcon from "./CheckIcon";

export default function TodoCard({
  text,
  isCompleted,
  onDelete,
  onToggle,
}: {
  text: string;
  isCompleted: boolean;
  onDelete: () => void;
  onToggle: () => void;
}) {
  return (
    <div className="TodoCard">
      <div
        className={`TodoCard-checkbox ${isCompleted ? "checked" : ""}`}
        onClick={onToggle}
        style={{ cursor: "pointer" }}
        aria-label={isCompleted ? "할 일 완료 취소" : "할 일 완료"}
      >
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
