import './App.css';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공식문서 읽기', isDone: true },
    { id: 2, text: '알고리즘 문제 풀기', isDone: true },
    { id: 3, text: '운동 30분 하기', isDone: false },
    { id: 4, text: '프로젝트 회의 준비', isDone: false },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;