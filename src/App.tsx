import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const title = "오늘의 할 일";

  const todo1 = "리액트 공식문서 읽기";
  const todo2 = "알고리즘 문제 풀기";
  const todo3 = "운동 30분 하기";
  const todo4 = "프로젝트 회의 준비";

  const icon = "✅";

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="w-[640px] inline-flex flex-col justify-start items-start gap-5">
        <TodoHeader icon={icon} title={title} />
        <TodoList todo1={todo1} todo2={todo2} todo3={todo3} todo4={todo4} />
      </div>
    </div>
  );
}

export default App;
