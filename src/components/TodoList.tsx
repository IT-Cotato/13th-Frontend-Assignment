import TodoCard from './TodoCard';

interface TodoListProps {
  items: string[];
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
      {items.map((item, index) => (
        <li key={index} style={{ width: '100%' }}>
          <TodoCard task={item} />
        </li>
      ))}
    </ul>
  );
}