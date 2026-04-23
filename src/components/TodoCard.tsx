import '../css/TodoCard.css';
import checkIcon from '../assets/checkIcon.svg';

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoCard({ id, text, isChecked, onCheck, onDelete }: Props) {
  return (
    <li className="card">
      <label className="card-label">
        <input
          className="card-input"
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheck(id)}
        />
        <span className="card-checkbox-ui">
          {isChecked ? (
            <img src={checkIcon} alt="" className="card-checkbox-icon" />
          ) : null}
        </span>
        <span className="card-text">{text}</span>
      </label>

      <button aria-label='Todo-delete'
        type="button"
        className="card-delete-button"
        onClick={() => onDelete(id)}
      >
        🗑
      </button>
    </li>
  );
}