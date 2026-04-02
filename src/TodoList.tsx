import TodoCard from "./TodoCard";
import type { Todo } from "./types/todo.types";

function TodoList({ todos, onDelete }: { todos: Todo[]; onDelete: (id: number) => void }) {
  if (todos.length === 0) {
    return (
      <div className="empty-container">
        <div className="empty-icon">📋</div>
        <div className="empty-text">아직 할 일이 없어요</div>
      </div>
    );
  }

  return (
    <ul className="frame1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard text={todo.text} isDone={todo.isDone} onDelete={() => onDelete(todo.id)} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;