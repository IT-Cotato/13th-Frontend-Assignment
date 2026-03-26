import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

function TodoList({ todos }: { todos: Todo[] }) {
  // 비어있을 경우 빈 상태 UI
  if (todos.length === 0) {
    return (
      <div className="empty">
        <span className="empty-icon">📋</span>
        <p>아직 할 일이 없어요</p>
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