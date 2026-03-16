import TodoCard from "./TodoCard";
 
export default function TodoList() {
  return (
    <ul className="flex flex-col items-start gap-[16px] self-stretch">
      <TodoCard content="리액트 공식문서 읽기" />
      <TodoCard content="알고리즘 문제 풀기" />
      <TodoCard content="운동 30분 하기" />
      <TodoCard content="프로젝트 회의 준비" />
    </ul>
  )
}