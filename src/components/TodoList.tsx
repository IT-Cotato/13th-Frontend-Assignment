import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
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
  editingId,
  editingText,
  onToggle,
  onDelete,
  onStartEdit,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}: TodoListProps) {
  return (
    <ul className="flex list-none flex-col gap-4 p-0">
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
