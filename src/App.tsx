import {useState} from 'react';
import {TODO_ITEMS} from './constants/todoData';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export default function App() {
  const [todoItems, setTodoItems] = useState(TODO_ITEMS);

  const toggleTodo = (id: string) => {
    setTodoItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const appBackgroundStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg)',
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'auto' 
  };

  const todoContainerStyle: React.CSSProperties = {
    width: '640px',     
    maxWidth: '90%',       
    boxSizing: 'border-box',
    margin: '80px auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--bg)',
    borderRadius: '16px',
  };

  return (
    <div style={appBackgroundStyle}>
      <main style={todoContainerStyle}>
        <TodoHeader title="✅ 오늘의 할 일" />
        <TodoList items={todoItems} onToggle={toggleTodo} />
      </main>
    </div>
  );
}