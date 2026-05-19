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
          {/* key를 TodoCard에 지정하면 id가 바뀔 때 isEditing 등 내부 state가 리셋됨 */}
          <TodoCard
            key={item.id}
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