import TodoCard from './TodoCard';

interface TodoListProps {
  items: string[];
}

export default function TodoList({ items }: TodoListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {items.map((item, index) => (
        <TodoCard key={index} task={item} />
      ))}
    </div>
  );
}