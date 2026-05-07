import { useState } from 'react';
import { TODO_ITEMS } from './constants/todoData';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';
import TodoInput from './components/TodoInput';
import TodoStats from './components/TodoStats';
import CategoryTag from './components/CategoryTag';
import SearchInput from './components/SearchInput';
import FilterCategory from './components/FilterCategory';
import type { Todo, Category } from './types/todo';
import type { FilterCategory as FilterCategoryType } from './components/FilterCategory';

export default function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>(TODO_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState<Category>('공부');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<FilterCategoryType>('전체');

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

  const dividerStyle: React.CSSProperties = {
    borderBottom: '1px solid var(--border)',
    paddingBottom: '24px',
    marginBottom: '24px',
  };

  const filteredItems = todoItems.filter((item) => {
    const matchesCategory = filterCategory === '전체' || item.category === filterCategory;
    const matchesSearch = item.task.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={appBackgroundStyle}>
      <main style={todoContainerStyle}>
        <TodoHeader title="✅ 오늘의 할 일" />
        <TodoStats todos={todoItems} />
        <div style={dividerStyle}>
          <TodoInput onAdd={addTodo} />
          <CategoryTag
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div style={{ marginTop: '24px' }}>
          <FilterCategory selected={filterCategory} onSelect={setFilterCategory} />
        </div>
        {filteredItems.length > 0 ? (
          <TodoList
            items={filteredItems}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ) : (
          <EmptyState variant={searchQuery || filterCategory !== '전체' ? 'no-results' : 'empty'} />
        )}
      </main>
    </div>
  );
}