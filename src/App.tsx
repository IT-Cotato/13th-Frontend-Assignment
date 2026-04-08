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
    // 2. 새로운 Todo 객체 생성 및 추가
    const newTodo = {
      id: Date.now(), // 겹치지 않는 고유 ID 생성
      text: inputValue,
      isChecked: false,
    };
    
    setTodos((prev) => [...prev, newTodo]);
    setInputValue(''); // 추가 후 입력창 비우기
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