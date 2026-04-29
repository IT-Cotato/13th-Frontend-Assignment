import type { TodoItem } from "../types";
import TodoCard from "./TodoCard";

interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function TodoList({ items, onToggle, onDelete }: TodoListProps) {
  if (items.length === 0) {
    return (
      <div className="todo-empty-state" role="status" aria-live="polite">
        아직 등록된 할 일이 없어요.
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id}>
          <TodoCard
            text={item.text}
            checked={item.checked}
            category={item.category}
            onToggle={() => onToggle(item.id)}
            onDelete={onDelete ? () => onDelete(item.id) : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
