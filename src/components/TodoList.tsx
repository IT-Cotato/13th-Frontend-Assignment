import TodoCard from './TodoCard';
import '../css/TodoList.css';

type Props = {
  todos: string[];
};

export default function TodoList({ todos }: Props) {
  return (
    <div className="card-list">
      {todos.map((todo) => (
        <TodoCard key={todo} text={todo} />
      ))}
    </div>
  );
}