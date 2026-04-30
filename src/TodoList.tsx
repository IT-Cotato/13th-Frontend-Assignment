import TodoCard from "./TodoCard";
import type Todo from "./types/todo";

export default function TodoList({
  todos,
  onDelete,
  onToggle,
}: {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📋</span>
        <p className="empty-text">아직 할 일이 없어요</p>
      </div>
    );
  }

  return (
    <ul className="frame1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard
            text={todo.text}
            isCompleted={todo.isCompleted}
            category={todo.category}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}
