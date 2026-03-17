export default function TodoHeader({ icon, title }) {
  return (
    <div className="todo-title-row">
      <span className="title-icon" aria-hidden="true">
        {icon}
      </span>
      <h2 id="today-title">{title}</h2>
    </div>
  );
}
