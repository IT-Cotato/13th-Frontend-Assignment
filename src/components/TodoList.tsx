import "./TodoList.css"
import TodoCard from "./TodoCard";
import type { Todo } from "../App";

type Props = {
  todos: Todo[];
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

function TodoList({ todos, onToggleTodo, onDeleteTodo }: Props) {
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
        <li key={todo.id} className="card-item">
           <TodoCard
            text={todo.text}
            completed={todo.completed}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;