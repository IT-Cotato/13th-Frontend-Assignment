import checkIcon from "../assets/check.svg";

type TodoCardProps = {
  text: string;
  completed: boolean;
  onDelete: () => void;
  onToggle: () => void;
};

export default function TodoCard({ text, completed, onDelete, onToggle }: TodoCardProps) {
  return (
    <div className="todo-card">
      <label className="todo-card__check-label">
        <input 
          type="checkbox" // input type checkbox로 수정
          className="todo-card__check-input"
          checked={completed}
          onChange={onToggle}
        />
        <span className={`todo-card__check ${completed ? "todo-card__check--done" : ""}`}>
          {completed && (
            <img src={checkIcon} alt="" className="todo-card__check-icon" />
          )}
        </span>
      </label>
      <span className={`todo-card__text ${completed ? "todo-card__text--done" : ""}`}>
        {text}
      </span>
      <button
        className="delete-button"
        onClick={onDelete}
        aria-label="삭제" // 삭제 버튼
      >
        🗑️
      </button>
    </div>
  );
}