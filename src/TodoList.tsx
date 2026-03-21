import TodoCard from "./TodoCard";

export default function TodoList() {
    
  return (
    <div className="frame1">
      <TodoCard text="리액트 공식문서 읽기" />
      <TodoCard text="알고리즘 문제 풀기" />
      <TodoCard text="운동 30분 하기" />
      <TodoCard text="프로젝트 회의 준비" />
    </div>
  )
}