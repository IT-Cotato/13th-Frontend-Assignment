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
    boxSizing: 'border-box'
  };

  return (
    <div style={listContainerStyle}>
      {items.map((item, index) => (
        <TodoCard key={index} task={item} />
      ))}
    </div>
  );
}