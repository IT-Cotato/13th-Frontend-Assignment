import TodoCard from "./TodoCard";
import type { Todo } from "../App";

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="inline-flex h-60 w-[640px] flex-col items-start justify-start gap-3 rounded-xl bg-white pt-16 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)]">
        <div className="flex h-16 w-full items-center justify-center">
          <div className="text-center text-5xl leading-[72px] text-neutral-950">
            📋
          </div>
        </div>

        <div className="flex h-5 w-full items-center justify-center">
          <div className="text-center text-sm font-normal leading-5 text-gray-500">
            아직 할 일이 없어요
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="m-0 flex w-[640px] list-none flex-col gap-4 p-0">
      {todos.map((todo) => (
        <li key={todo.id} className="w-full">
          <TodoCard
            text={todo.text}
            completed={todo.completed}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
