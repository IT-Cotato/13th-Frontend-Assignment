import checkedIcon from "../assets/icons/checkedIcon.svg";

interface TodoCardProps {
  id: number;
  text: string;
  completed: boolean;
  onDelete: (id: number) => void;
}

export default function TodoCard({
  id,
  text,
  completed,
  onDelete,
}: TodoCardProps) {
  function handleClick() {
    onDelete(id);
  }

  if (completed) {
    return (
      <li className={`item checked`}>
        <div className="CheckedBox">
          <img src={checkedIcon} alt="checked" />
        </div>
        <div className="text">
          <del>{text}</del>
        </div>
        <button className="delBtn">🗑</button>
      </li>
    );
  }

  return (
    <li className="item">
      <div className="UncheckedBox"></div>
      <div className="text">{text}</div>
      <button className="delBtn" onClick={handleClick}>
        🗑
      </button>
    </li>
  );
}
