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
      <span className={isDone ? 'done' : ''}>{text}</span>
    </div>
  );
}

export default TodoCard;