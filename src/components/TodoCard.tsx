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
      <button
        type="button"
        className={`check-circle ${completed ? 'checked' : ''}`}
        onClick={onToggle}
      >        
        {completed && <img src={checkIcon} className="check-img" />}
      </button>
      <span className="card-done">{text}</span>
      <button className="delete-icon" onClick={onDelete}>🗑</button>
    </div>
  );
}

export default TodoCard;