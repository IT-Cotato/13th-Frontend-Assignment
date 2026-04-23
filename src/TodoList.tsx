import TodoCard from "./TodoCard";
import type { Todo } from "./types/todo.types";

function TodoList({ 
  todos, 
  onDelete, 
  onToggle 
}: { 
  todos: Todo[]; 
  onDelete: (id: number) => void; 
  onToggle: (id: number) => void; 
}) {
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
          <TodoCard 
            text={todo.text} 
            completed={todo.completed}
            onDelete={() => onDelete(todo.id)} 
            onToggle={() => onToggle(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;