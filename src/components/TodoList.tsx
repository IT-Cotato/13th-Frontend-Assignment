import TodoCard from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

type Props = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

function TodoList({ todos, toggleTodo }: Props) {
  return (
    <ul className="card-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
          <TodoCard text={todo.text} isDone={todo.isDone} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;