import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {id:1, text:'리액트 공식문서 읽기', isChecked:false},
    {id:2, text:'알고리즘 문제 풀기', isChecked:false},
    {id:3, text:'운동 30분 하기', isChecked:false},
    {id:4, text:'프로젝트 회의 준비', isChecked:false},
  ]);

  const onCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };  

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoList todos={todos} onCheck={onCheck} />
    </div>
  );
}

export default App;