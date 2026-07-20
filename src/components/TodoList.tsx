import TodoCard from './TodoCard';
import type { Todo } from '../types/todo';
import type { ViewMode } from './ViewToggle';

interface TodoListProps {
  items: Todo[];
  viewMode: ViewMode;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTask: string) => void;
}

export default function TodoList({ items, viewMode, onToggle, onDelete, onUpdate }: TodoListProps) {
  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '24px 0 0 0',
    display: viewMode === 'grid' ? 'grid' : 'flex',
    gridTemplateColumns: viewMode === 'grid' ? 'repeat(2, 1fr)' : undefined,
    flexDirection: viewMode === 'list' ? 'column' : undefined,
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
            viewMode={viewMode}
            onToggle={onToggle}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </li>
      ))}
    </ul>
  );
}