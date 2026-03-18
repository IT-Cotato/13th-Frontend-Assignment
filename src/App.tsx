import {TODO_ITEMS} from './constants/todoData';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export default function App() {
  const todoItems = TODO_ITEMS;
  const mainTitle = "✅ 오늘의 할 일";
  const appBackgroundStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg)', // #F5F5F5
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'auto' 
  };

  const todoContainerStyle: React.CSSProperties = {
    width: '640px',            
    boxSizing: 'border-box',
    position: 'absolute',
    top: '80px',               
    left: '445px',             
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={appBackgroundStyle}>
      <main style={todoContainerStyle}>
        <TodoHeader title={mainTitle} />
        <TodoList items={todoItems} />
      </main>
    </div>
  );
}