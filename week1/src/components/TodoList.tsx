import type { TodoItem } from "../types";
import TodoCard from "./TodoCard";

interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function TodoList({ items, onToggle, onDelete }: TodoListProps) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id}>
          <TodoCard
            text={item.text}
            checked={item.checked}
            onToggle={() => onToggle(item.id)}
            onDelete={onDelete ? () => onDelete(item.id) : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
