import './App.css';
import EmptyList from './components/EmptyList';
import TodoCount from './components/TodoCount';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { INITIAL_TODOS } from './data/todo.data';
import type { TodoCategory, TodoItem } from './types/todo.types';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);
  const [inputValue, setInputValue] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategory>('공부');
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const onCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const onAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTodo: TodoItem = {
      id: Date.now(),
      text: trimmed,
      isChecked: false,
      category: selectedCategory,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue('');
  };

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

    if (editingTodoId === id) {
      setEditingTodoId(null);
      setEditingText('');
    }
  };

  const onEditStart = (id: number, text: string) => {
    setEditingTodoId(id);
    setEditingText(text);
  };

  const onEditSave = (id: number) => {
    const trimmed = editingText.trim();
    if (!trimmed) return;

    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: trimmed } : todo))
    );
    setEditingTodoId(null);
    setEditingText('');
  };

  const onEditCancel = () => {
    setEditingTodoId(null);
    setEditingText('');
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        value={inputValue}
        selectedCategory={selectedCategory}
        onChange={setInputValue}
        onCategoryChange={setSelectedCategory}
        onAdd={onAdd}
      />

      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          editingTodoId={editingTodoId}
          editingText={editingText}
          onCheck={onCheck}
          onDelete={onDelete}
          onEditStart={onEditStart}
          onEditChange={setEditingText}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
        />
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default App;
