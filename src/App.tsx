import { useState, useReducer } from 'react';
import { TODO_ITEMS } from './constants/todoData';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import EmptyState from './components/EmptyState';
import TodoInput from './components/TodoInput';
import TodoStats from './components/TodoStats';
import CategoryTag from './components/CategoryTag';
import SearchInput from './components/SearchInput';
import FilterCategory from './components/FilterCategory';
import { todoReducer } from './reducers/todoReducer';
import ViewToggle from './components/ViewToggle';
import SortBar from './components/SortBar';
import type { Category } from './types/todo';
import type { FilterCategory as FilterCategoryType } from './components/FilterCategory';
import type { ViewMode } from './components/ViewToggle';
import type { SortType } from './components/SortBar';

export default function App() {
  const [todoItems, dispatch] = useReducer(todoReducer, TODO_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState<Category>('공부');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<FilterCategoryType>('전체');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [sort, setSort] = useState<SortType>('생성순');
  const [hideCompleted, setHideCompleted] = useState(false);

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

  const handleAddTodo = (task: string) => {
    dispatch({ type: 'ADD', payload: { id: `todo-${Date.now()}`, task, category: selectedCategory } });
  };

  const handleToggleTodo = (id: string) => {
    dispatch({ type: 'TOGGLE', payload: { id } });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const handleUpdateTodo = (id: string, task: string) => {
    dispatch({ type: 'UPDATE', payload: { id, task } });
  };

  const filteredItems = todoItems
    .filter((item) => {
      const matchesCategory = filterCategory === '전체' || item.category === filterCategory;
      const matchesSearch = item.task.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesHide = !hideCompleted || !item.isCompleted;
      return matchesCategory && matchesSearch && matchesHide;
    })
    .sort((a, b) => {
      if (sort === '완료순') return Number(b.isCompleted) - Number(a.isCompleted);
      if (sort === '이름순') return a.task.localeCompare(b.task, 'ko');
      return 0;
    });

  return (
    <div style={appBackgroundStyle}>
      <main style={todoContainerStyle}>
        <TodoHeader title="✅ 오늘의 할 일" />
        <TodoStats todos={todoItems} />
        <div style={dividerStyle}>
          <TodoInput onAdd={handleAddTodo} />
          <CategoryTag
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FilterCategory selected={filterCategory} onSelect={setFilterCategory} />
          <ViewToggle viewMode={viewMode} onToggle={setViewMode} />
        </div>
        <div style={{ marginTop: '26px' }}>
          <SortBar
            sort={sort}
            onSortChange={setSort}
            hideCompleted={hideCompleted}
            onHideCompletedChange={setHideCompleted}
          />
        </div>
        {filteredItems.length > 0 ? (
          <TodoList
            items={filteredItems}
            viewMode={viewMode}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo}
          />
        ) : (
          <EmptyState variant={searchQuery || filterCategory !== '전체' ? 'no-results' : 'empty'} />
        )}
      </main>
    </div>
  );
}