import CheckBox from "./CheckBox";

export default function TodoCard({
  id,
  text,
  completed,
  handleCompletedStatus,
  handleDeleteTodo
}: {
  id: number;
  text: string;
  completed: boolean;
  handleCompletedStatus: (targetId: number) => void;
  handleDeleteTodo: (deletedId: number) => void;
}) {
  if (completed) {
    return (
      <li className={`item checked`}>
        <CheckBox completed={completed} onToggle={() => handleCompletedStatus(id)} />
        <div className="text">
          <del>{text}</del>
        </div>
        <button className="delBtn" onClick={() => handleDeleteTodo(id)}>🗑</button>
      </li>
    );
  }

  return (
    <li className="item">
      <CheckBox completed={completed} onToggle={() => handleCompletedStatus(id)} />
      <div className="text">{text}</div>
      <button className="delBtn" onClick={() => handleDeleteTodo(id)}>
        🗑
      </button>
    </li>
  );
}
