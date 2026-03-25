import checkIcon from "../assets/check.svg";

type TodoCardProps = {
  text: string;
  done: boolean;
};

export default function TodoCard({ text, done }: TodoCardProps) {
  return (
    <div className="todo-card">
      <div className={`todo-card__check ${done ? "todo-card__check--done" : ""}`}>
        {done && (
          <img src={checkIcon} alt="완료" className="todo-card__check-icon" />
        )}
      </div>
      <span className={`todo-card__text ${done ? "todo-card__text--done" : ""}`}>
        {text}
      </span>
    </div>
  );
}