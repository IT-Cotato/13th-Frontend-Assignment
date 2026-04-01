import './TodoCard.css';
import checkIcon from '../assets/check.svg';

type Props = {
  text: string;
  isDone: boolean;
};

function TodoCard({ text, isDone }: Props) {
  return (
    <div className={`card ${isDone ? 'done' : ''}`}>
      <div className={`check-circle ${isDone ? 'checked' : ''}`}>
        {isDone && <img src={checkIcon} className="check-img" />}
      </div>
      <span className="card-done">{text}</span>
      <button className="delete-icon">🗑</button>
    </div>
  );
}

export default TodoCard;