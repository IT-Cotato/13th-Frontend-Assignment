import TodoCard from "./TodoCard";

function TodoList() {
  const todos = [
    { id: 1, text: "리액트 공식문서 읽기", isDone: true },
    { id: 2, text: "알고리즘 문제 풀기", isDone: true },
    { id: 3, text: "운동 30분 하기", isDone: false },
    { id: 4, text: "프로젝트 회의 준비", isDone: false },
  ];

  return (
    <ul className="frame1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard text={todo.text} isDone={todo.isDone} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;