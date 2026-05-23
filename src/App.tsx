import './App.css';
import { useReducer, useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoCount from './components/TodoCount';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import type { TodoCategory } from './types/todo';
import SearchInput from './components/SearchInput';
import CategoryFilter from './components/CategoryFilter';
import { initialTodos, todoReducer } from './reducers/todoReducer';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TodoCategory>('공부');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filterCategory, setFilterCategory] = useState<'전체' | TodoCategory>('전체');

  const handleChangeInput = (value: string) => {
    setInputText(value);
  };

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();

    if (trimmedText === '') return;

    dispatch({
      type: 'ADD_TODO',
      payload: {
        text: trimmedText,
        category: selectedCategory,
      },
    });
    setInputText('');
  };

  const handleToggleTodo = (id: number) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: { id },
    });
  };

  const handleStartEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };
  
  const handleSaveEdit = (id: number) => {
    const trimmedText = editingText.trim();

    if (trimmedText === '') return;

    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id,
        text: trimmedText,
      },
    });

    setEditingId(null);
    setEditingText('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const handleDeleteTodo = (id: number) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: { id },
    });
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      filterCategory === '전체'
        ? true
        : todo.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const isFiltering =
    searchText.trim() !== '' || filterCategory !== '전체';

  const emptyMessage =
    todos.length === 0
      ? '아직 할 일이 없어요'
      : isFiltering && filteredTodos.length === 0
        ? '검색 결과가 없습니다'
        : '아직 할 일이 없어요';

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        inputText={inputText}
        selectedCategory={selectedCategory}
        onChangeInput={handleChangeInput}
        onChangeCategory={setSelectedCategory}
        onAddTodo={handleAddTodo} 
      />
      <SearchInput
        searchText={searchText}
        onChangeSearch={setSearchText}
      />
      <CategoryFilter
        selectedCategory={filterCategory}
        onSelectCategory={setFilterCategory}
      />
      <TodoList 
        todos={filteredTodos} 
        emptyMessage={emptyMessage}
        editingId={editingId}
        editingText={editingText}
        onChangeEditText={setEditingText}
        onStartEdit={handleStartEdit}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;