import "./TodoList.css"
import TodoCard from "./TodoCard";
import type { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  editingId: number | null;
  editingText: string;
  onChangeEditText: (value: string) => void;
  onStartEdit: (id: number, text: string) => void;
  onSaveEdit: (id: number) => void;
  onCancelEdit: () => void;
  onToggleTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
};

function TodoList({ todos, editingId, editingText, onChangeEditText, onStartEdit, onSaveEdit, onCancelEdit, onToggleTodo, onDeleteTodo }: Props) {
   // 할 일이 없을 때
  if (todos.length === 0) {
    return (
      <div className="empty">
        <div className="empty-icon">📋</div>
        <p className="empty-text">아직 할 일이 없어요</p>
      </div>
    );
  }

  // 할 일이 있을 때
  return (
    <ul className="card-list">
      {todos.map((todo) => (
        <li key={todo.id} className="card-item">
           <TodoCard
            text={todo.text}
            completed={todo.completed}
            category={todo.category}
            isEditing={editingId === todo.id}
            editingText={editingText}
            onChangeEditText={onChangeEditText}
            onStartEdit={() => onStartEdit(todo.id, todo.text)}
            onSaveEdit={() => onSaveEdit(todo.id)}
            onCancelEdit={onCancelEdit}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;