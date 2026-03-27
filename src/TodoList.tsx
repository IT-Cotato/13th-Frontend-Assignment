import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

export default function TodoList({todos}: {todos: Todo[]}) {
    
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