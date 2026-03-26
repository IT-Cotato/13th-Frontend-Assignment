import TodoCard from './TodoCard';
import '../css/TodoList.css';

export type TodoItem = {
  id: number;
  text: string;
  isChecked: boolean;
};

type Props = {
  todos: TodoItem[];
  onCheck: (id: number) => void;
};

export default function TodoList({ todos, onCheck }: Props) {
  return (
    <ul className="card-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
          onCheck={onCheck}
        />
      ))}
    </ul>
  );
}