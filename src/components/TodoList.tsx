import TodoCard from "./TodoCard";

type Props = {
  todos: string[];
};

function TodoList({ todos }: Props) {
  return (
    <ul className="card-list">
      {todos.map((todo, idx) => (
        <li key={idx}>
          <TodoCard text={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;