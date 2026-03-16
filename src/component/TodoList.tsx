import TodoCard from "./TodoCard";
 

export default function TodoList() {
  return (
    <div className="flex flex-col w-full items-start justify-center gap-[16px]">
      <TodoCard
        content="리액트 공식문서 읽기"
      />
       <TodoCard
        content="알고리즘 문제 풀기"
      />
       <TodoCard
        content="운동 30분 하기"
      />
       <TodoCard
        content="프로젝트 회의 준비"
      />
    </div>
  )
}