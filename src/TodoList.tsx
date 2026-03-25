import TodoCard from "./TodoCard";

export default function TodoList() {
    
  return (
    <ul className="frame1">
      <li><TodoCard text="리액트 공식문서 읽기" /></li>
      <li><TodoCard text="알고리즘 문제 풀기" /></li>
      <li><TodoCard text="운동 30분 하기" /></li>
      <li><TodoCard text="프로젝트 회의 준비" /></li>
    </ul>
  )
}