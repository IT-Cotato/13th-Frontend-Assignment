import '../css/TodoCount.css';
import type { TodoItem } from '../types/todo.types';

type Props = {
  todos: TodoItem[];
};

export default function TodoCount({ todos }: Props) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.isChecked).length;
  const incomplete = total - completed;

  return (
    <div className="todo-count">
      <span className="todo-count-item">
        전체 <span className="todo-count-num1">{total}</span>개
      </span>

      <span className="todo-count-item">
        완료 <span className="todo-count-num2">{completed}</span>개
      </span>

      <span className="todo-count-item">
        미완료 <span className="todo-count-num3">{incomplete}</span>개
      </span>
    </div>
  );
}
