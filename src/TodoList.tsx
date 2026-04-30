import TodoCard from "./TodoCard";
import type { Todo } from "./types/todo.types";

function TodoList({
  todos,
  onDelete,
  onToggle,
  editingId,
  editText,
  setEditText,
  onEdit,
  onUpdate,
  onCancel,
}: {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;

  editingId: number | null;
  editText: string;
  setEditText: (text: string) => void;

  onEdit: (id: number, text: string) => void;
  onUpdate: (id: number) => void;
  onCancel: () => void;
}) {
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
          <TodoCard
            {...todo}
            onDelete={() => onDelete(todo.id)}
            onToggle={() => onToggle(todo.id)}

            isEditing={editingId === todo.id}
            editText={editText}
            setEditText={setEditText}
            onEdit={() => onEdit(todo.id, todo.text)}
            onUpdate={() => onUpdate(todo.id)}
            onCancel={onCancel}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;