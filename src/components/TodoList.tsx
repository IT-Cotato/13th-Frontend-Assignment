import TodoCard from './TodoCard';

interface TodoItem {
  id: string;
  task: string;
}

interface TodoListProps {
  items: TodoItem[];
}

export default function TodoList({ items }: TodoListProps) {
  const listContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',          
    marginTop: '22px',    
    width: '100%',
    boxSizing: 'border-box',

    listStyle: 'none',
    padding: 0,
    margin: '22px 0 0 0'
  };

  return (
    <ul style={listContainerStyle}>
      {items.map((item) => (
        <li key={item.id} style={{ width: '100%' }}>
          <TodoCard task={item.task} />
        </li>
      ))}
    </ul>
  );
}