interface TodoHeaderProps {
  icon: string;
  title: string;
  headingId: string;
}

export default function TodoHeader({ icon, title, headingId }: TodoHeaderProps) {
  return (
    <div className="todo-title-row">
      <span className="title-icon" aria-hidden="true">
        {icon}
      </span>
      <h2 id={headingId}>{title}</h2>
    </div>
  );
}
