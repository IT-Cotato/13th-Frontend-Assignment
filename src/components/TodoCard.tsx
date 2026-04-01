import './TodoCard.css';
import checkIcon from '../assets/check.svg';

type Props = {
  text: string;
  completed: boolean;
};

function TodoCard({ text, completed }: Props) {
  return (
    <div className={`card ${completed ? 'done' : ''}`}>
      <div className={`check-circle ${completed ? 'checked' : ''}`}>
        {completed && <img src={checkIcon} className="check-img" />}
      </div>
      <span className="card-done">{text}</span>
      <button className="delete-icon">🗑</button>
    </div>
  );
}

export default TodoCard;