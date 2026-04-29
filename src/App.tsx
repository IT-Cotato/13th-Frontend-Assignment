import { useState } from 'react';
import { TODO_ITEMS } from './constants/todoData';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';
import TodoInput from './components/TodoInput';
import TodoStats from './components/TodoStats';
import CategoryTag from './components/CategoryTag';
import type { Category } from './components/CategoryTag';

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
  category: Category;
}

export default function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>(TODO_ITEMS as Todo[]);
  const [selectedCategory, setSelectedCategory] = useState<Category>('공부');

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: `todo-${Date.now()}`, 
      task, 
      isCompleted: false,
      category: selectedCategory,
    };
    setTodoItems((prev) => [...prev, newTodo]); 
  };
  
  const toggleTodo = (id: string) => {
    setTodoItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id: string, newTask: string) => {
    setTodoItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, task: newTask } : item
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
        <TodoStats todos={todoItems} />
        <TodoInput onAdd={addTodo} />
        <CategoryTag 
          selectedCategory={selectedCategory} 
          onSelect={setSelectedCategory} 
        />
        {todoItems.length > 0 ? (
          <TodoList 
            items={todoItems} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
            onUpdate={updateTodo}
          />
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}