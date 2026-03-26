import '../css/TodoCard.css';
import checkIcon from '../assets/checkIcon.svg';

type Props = {
  id: number;
  text: string;
  isChecked: boolean;
  onCheck: (id: number) => void;
};

export default function TodoCard({ id, text, isChecked, onCheck }: Props) {
  return (
    <div className="card">
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
    </div>
  );
}