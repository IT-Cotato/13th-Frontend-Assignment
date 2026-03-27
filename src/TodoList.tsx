import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function TodoList({todos}: {todos: Todo[]}) {
    if (todos.length === 0) {
        return (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
        <p className="empty-text">아직 할 일이 없어요</p>
        </div>
        )
      }

  return (
    <ul className="frame1">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoCard text={todo.text} isCompleted={todo.isCompleted} />
        </li>
      ))}
    </ul>
  )
}