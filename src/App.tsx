import './App.css';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';


function App() {
  const todos = [
    '리액트 공식문서 읽기',
    '알고리즘 문제 풀기',
    '운동 30분 하기',
    '프로젝트 회의 준비',
  ];

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;