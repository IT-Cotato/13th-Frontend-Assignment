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
    backgroundColor: '#F5F5F5', 
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
    margin: 0,
    padding: 0,
    overflow: 'hidden'         
  };

  return (
    <div style={appBackgroundStyle}>
      <main id="root">
        <TodoHeader title={mainTitle} />
        <div style={{ flex: 1, padding: '0 20px 40px' }}>
          <TodoList items={todoItems} />
        </div>
      </main>
    </div>
  );
}