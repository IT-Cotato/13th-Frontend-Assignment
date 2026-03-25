import TodoCard from "./TodoCard";
 
export default function TodoList() {

  const todos = [
    { id: 1, content: "리액트 공식문서 읽기" },
    { id: 2, content: "알고리즘 문제 풀기" },
    { id: 3, content: "운동 30분 하기" },
    { id: 4, content: "프로젝트 회의 준비" },
  ];

  return (
    <ul className="flex flex-col items-start gap-4 self-stretch">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}
          content={todo.content} 
        />
      ))}
    </ul>
  )
}