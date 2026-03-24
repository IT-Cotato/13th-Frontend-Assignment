import TodoCard from './TodoCard';

interface TodoItem {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoListProps {
  items: TodoItem[];
  onToggle: (id: string) => void;
}


export default function TodoList({ items, onToggle }: TodoListProps) {
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
            onToggle={onToggle}
          />
        </li>
      ))}
    </ul>
  );
}