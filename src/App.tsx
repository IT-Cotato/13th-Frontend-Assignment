import './App.css';
import EmptyList from './components/EmptyList';
import TodoCount from './components/TodoCount';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { INITIAL_TODOS } from './data/todo.data';
import type { TodoItem } from './types/todo.types';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS);

  const [inputValue, setInputValue] = useState('');

  const onCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const onInputChange = (text: string) => {
    setInputValue(text);
  };


  const onAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      isChecked: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue('');
  };

  const onDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };


  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        value={inputValue}
        onChange={onInputChange}
        onAdd={onAdd}
      />
      


      {todos.length > 0 ? (
        <TodoList todos={todos} onCheck={onCheck} onDelete={onDelete} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default App;