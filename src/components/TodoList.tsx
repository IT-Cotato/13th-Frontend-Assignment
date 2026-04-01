import TodoCard from './TodoCard';
import '../css/TodoList.css';
import type { TodoItem } from '../types/todo.types';

type Props = {
  todos: TodoItem[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onCheck, onDelete }: Props) {
  return (
    <ul className="card-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}