import TodoCard from './TodoCard';
import type { Category } from './CategoryTag';

interface TodoItem {
  id: string;
  task: string;
  isCompleted: boolean;
  category: Category;
}

interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, newTask: string) => void;
}

export default function TodoList({ items, onToggle, onDelete, onUpdate }: TodoListProps) {
  const listStyle: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '22px 0 0 0',
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