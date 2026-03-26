import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

function TodoList({ todos }: { todos: Todo[] }) {
  // 빈 배열이면 빈 상태 UI 렌더링
  if (todos.length === 0) {
    return (
      <div className="empty-container">
        <div className="empty-icon">📋</div>
        <div className="empty-text">아직 할 일이 없어요</div>
      </div>
    );
  }

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