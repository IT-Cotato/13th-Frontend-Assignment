import './TodoCard.css';
import checkIcon from '../assets/check.svg';

type Props = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoCard({ text, completed, onToggle, onDelete }: Props) {
  return (
    <div className={`card ${completed ? 'done' : ''}`}>
      <label className={`check-circle ${completed ? 'checked' : ''}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="checkbox-hidden"
        />
        {completed && <img src={checkIcon} className="check-img" />}
      </label>
      <span className="card-done">{text}</span>
      <button className="delete-icon" onClick={onDelete} aria-label="할 일 삭제">🗑</button>
    </div>
  );
}

export default TodoCard;