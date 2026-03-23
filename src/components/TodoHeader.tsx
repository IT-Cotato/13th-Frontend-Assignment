type TodoHeaderProps = {
  icon: string;
  title: string;
};

export default function TodoHeader({ icon, title }: TodoHeaderProps) {
  return (
    <div className="todo-header">
      <span className="todo-header__icon">{icon}</span>
      <h1 className="todo-header__title">{title}</h1>
    </div>
  );
}