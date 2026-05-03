import TodoCard from './TodoCard';
import '../css/TodoList.css';
import type { TodoItem } from '../types/todo.types';

type Props = {
  todos: TodoItem[];
  editingTodoId: number | null;
  editingText: string;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  onEditStart: (id: number, text: string) => void;
  onEditChange: (text: string) => void;
  onEditSave: (id: number) => void;
  onEditCancel: () => void;
};

export default function TodoList({
  todos,
  editingTodoId,
  editingText,
  onCheck,
  onDelete,
  onEditStart,
  onEditChange,
  onEditSave,
  onEditCancel,
}: Props) {
  return (
    <ul className="card-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isChecked={todo.isChecked}
          category={todo.category}
          isEditing={editingTodoId === todo.id}
          editingText={editingText}
          onCheck={onCheck}
          onDelete={onDelete}
          onEditStart={onEditStart}
          onEditChange={onEditChange}
          onEditSave={onEditSave}
          onEditCancel={onEditCancel}
        />
      ))}
    </ul>
  );
}
