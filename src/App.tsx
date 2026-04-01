import './App.css';
import EmptyList from './components/EmptyList';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState([
    {id:1, text:'리액트 공식문서 읽기', isChecked:false},
    {id:2, text:'알고리즘 문제 풀기', isChecked:false},
    {id:3, text:'운동 30분 하기', isChecked:false},
    {id:4, text:'프로젝트 회의 준비', isChecked:false},
  ]);

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

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoInput
        value={inputValue}
        onChange={onInputChange}
        onAdd={onAdd}
      />
      


      {todos.length > 0 ? (
        <TodoList todos={todos} onCheck={onCheck} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
}

export default App;