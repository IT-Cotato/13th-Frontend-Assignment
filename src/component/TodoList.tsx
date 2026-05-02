import TodoCard from "./TodoCard";
import { type CategoryType } from "../constants/category";
 
interface TodoListProps {
  todos: { id: number; content: string; isDone: boolean; category: CategoryType }[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newContent: string) => void;
}

export default function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}
          content={todo.content} 
          checked={todo.isDone}
          category={todo.category}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onUpdate={(newContent) => onUpdate(todo.id, newContent)}
        />
      ))}
    </div>
  )
}