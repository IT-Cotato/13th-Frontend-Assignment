import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  emptyMessage: string;
  editingId: number | null;
  editingText: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onStartEdit: (id: number) => void;
  onChangeEditingText: (value: string) => void;
  onSaveEdit: (id: number) => void;
  onCancelEdit: () => void;
};

function TodoList({
  todos,
  emptyMessage,
  editingId,
  editingText,
  onToggle,
  onDelete,
  onStartEdit,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex h-60 w-full flex-col items-center justify-center gap-3 rounded-xl bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)]">
        <div className="text-5xl leading-[72px]">
          {emptyMessage === "아직 할 일이 없어요" ? "📋" : "🔎"}
        </div>
        <div className="text-sm font-normal leading-5 text-gray-500">
          {emptyMessage}
        </div>
      </div>
    );
  }

  return (
    <ul className="flex w-full list-none flex-col gap-4 p-0">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            text={todo.text}
            completed={todo.completed}
            category={todo.category}
            isEditing={editingId === todo.id}
            editingText={editingText}
            onToggle={() => onToggle(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onStartEdit={() => onStartEdit(todo.id)}
            onChangeEditingText={onChangeEditingText}
            onSaveEdit={() => onSaveEdit(todo.id)}
            onCancelEdit={onCancelEdit}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
