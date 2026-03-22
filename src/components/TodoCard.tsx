type TodoCardProps = {
  text: string;
};

export default function TodoCard({ text }: TodoCardProps) {
  return (
    <div className="todo-card">
      <span className="todo-card__text">{text}</span>
    </div>
  );
}