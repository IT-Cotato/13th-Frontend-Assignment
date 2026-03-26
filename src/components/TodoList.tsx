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
   // 할 일이 없을 때
  if (todos.length === 0) {
    return (
      <div className="empty">
        <div className="empty-icon">📋</div>
        <p className="empty-text">아직 할 일이 없어요</p>
      </div>
    );
  }

  // 할 일이 있을 때
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