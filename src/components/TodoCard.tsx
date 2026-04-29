import './TodoCard.css';
import checkIcon from '../assets/check.svg';
import type { TodoCategory } from '../types/todo';

type Props = {
  text: string;
  completed: boolean;
  category: TodoCategory;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoCard({ text, completed, category, onToggle, onDelete }: Props) {
  return (
    <div className={`card ${completed ? 'done' : ''}`}>
      <label className="todo-check-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="checkbox-hidden"
        />
        <span className={`check-circle ${completed ? 'checked' : ''}`}>
          {completed && <img src={checkIcon} className="check-img" alt="" />}
        </span>  
        <div className="card-content">
          <span className="card-done">{text}</span>
          <span className={`category-tag category-${category}`}>
            {category}
          </span>
        </div>    
      </label>
     
      <button className="delete-icon" onClick={onDelete} aria-label="할 일 삭제">🗑</button>
    </div>
  );
}

export default TodoCard;