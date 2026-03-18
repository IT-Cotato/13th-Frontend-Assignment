import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export default function App() {
  const mainTitle = "✅ 오늘의 할 일";
  const todoItems = [
    "리액트 공식문서 읽기",
    "알고리즘 문제 풀기",
    "운동 30분 하기",
    "프로젝트 회의 준비"
  ];

  const appBackgroundStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg)', // #F5F5F5
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'auto' 
  };

  const todoContainerStyle: React.CSSProperties = {
    width: '640px',            
    boxSizing: 'border-box',
    position: 'absolute',
    top: '80px',               
    left: '445px',             
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={appBackgroundStyle}>
      <main style={todoContainerStyle}>
        <TodoHeader title={mainTitle} />
        <TodoList items={todoItems} />
      </main>
    </div>
  );
}