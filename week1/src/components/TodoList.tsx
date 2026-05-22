import type { TodoItem } from "../types";
import TodoCard from "./TodoCard";

interface TodoListProps {
  items: TodoItem[];
  emptyMessage?: string;
  emptyIcon?: string;
  editingId?: number | null;
  editingText?: string;
  onEditingTextChange?: (text: string) => void;
  onEditStart?: (id: number, text: string) => void;
  onEditSave?: (id: number) => void;
  onEditCancel?: () => void;
  onToggle: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function TodoList({
  items,
  emptyMessage = "아직 등록된 할 일이 없어요.",
  emptyIcon,
  editingId = null,
  editingText = "",
  onEditingTextChange,
  onEditStart,
  onEditSave,
  onEditCancel,
  onToggle,
  onDelete,
}: TodoListProps) {
  if (items.length === 0) {
    return (
      <div className="todo-empty-state" role="status" aria-live="polite">
        {emptyIcon ? (
          <span className="todo-empty-icon" aria-hidden="true">
            {emptyIcon}
          </span>
        ) : null}
        <span>{emptyMessage}</span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id}>
          <TodoCard
            text={item.text}
            checked={item.checked}
            category={item.category}
            isEditing={editingId === item.id}
            editingText={editingText}
            onEditingTextChange={onEditingTextChange}
            onEditStart={onEditStart ? () => onEditStart(item.id, item.text) : undefined}
            onEditSave={onEditSave ? () => onEditSave(item.id) : undefined}
            onEditCancel={onEditCancel}
            onToggle={() => onToggle(item.id)}
            onDelete={onDelete ? () => onDelete(item.id) : undefined}
          />
        </li>
      ))}
    </ul>
  );
}
