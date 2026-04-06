import TodoCard from "./TodoCard";
 
interface TodoListProps {
  todos: { id: number; content: string; isDone: boolean }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete }: TodoListProps) {

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}
          content={todo.content} 
          checked={todo.isDone}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      ))}
    </div>
  )
}