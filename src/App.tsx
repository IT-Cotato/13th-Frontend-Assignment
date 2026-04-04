import './App.css';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoCount from './components/TodoCount';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '리액트 공식문서 읽기', completed: true },
    { id: 2, text: '알고리즘 문제 풀기', completed: true },
    { id: 3, text: '운동 30분 하기', completed: false },
    { id: 4, text: '프로젝트 회의 준비', completed: false },
    { id: 5, text: '장보기 하기', completed: false },
  ]);

  const handleChangeInput = (value: string) => {
    setInputText(value);
  };

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();

    if (trimmedText === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputText('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => 
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => 
      prev.filter((todo) =>
        todo.id !== id));
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        inputText={inputText}
        onChangeInput={handleChangeInput}
        onAddTodo={handleAddTodo} 
      />
      <TodoList 
        todos={todos} 
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;