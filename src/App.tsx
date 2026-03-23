import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const todos = [
    "리액트 공식문서 읽기",
    "알고리즘 문제 풀기",
    "운동 30분 하기",
    "프로젝트 회의 준비",
  ];

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="w-[640px] inline-flex flex-col justify-start items-start gap-5">
        <TodoHeader icon={icon} title={title} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
