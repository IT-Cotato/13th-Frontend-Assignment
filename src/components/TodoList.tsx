import TodoCard from './TodoCard';
import type { Todo } from '../types/todo';

interface TodoListProps {
  items: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTask: string) => void;
}

export default function TodoList({ items, onToggle, onDelete, onUpdate }: TodoListProps) {
  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '24px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };
return (
    <ul style={listStyle}>
      {items.map((item) => (
        <li key={item.id}>
          <TodoCard
            id={item.id}
            task={item.task}
            isCompleted={item.isCompleted}
            category={item.category}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </li>
      ))}
    </ul>
  );
}