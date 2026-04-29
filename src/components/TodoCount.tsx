import type { Todo } from '../types/todo';
import './TodoCount.css';

type TodoCountProps = {
  todos: Todo[];
};

function TodoCount({ todos }: TodoCountProps) {
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-count">
      <div className="count-item">
        전체 <span className="count-number count-total">{totalCount}</span>개
      </div>
      <div className="count-item">
        완료 <span className="count-number count-completed">{completedCount}</span>개
      </div>
      <div className="count-item">
        미완료 <span className="count-number count-active">{activeCount}</span>개
      </div>
    </div>
  );
}

export default TodoCount;