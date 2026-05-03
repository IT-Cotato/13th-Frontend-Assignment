import TodoCard from './TodoCard';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  // 수정 관련 props 추가
  editingId: number | null;
  editingText: string;
  onEditChange: (text: string) => void;
  onStartEdit: (id: number, text: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
}

const TodoList = ({ 
  todos, onDelete, onToggle, 
  editingId, editingText, onEditChange, onStartEdit, onSaveEdit, onCancelEdit 
}: TodoListProps) => {
  return (
    <div className="todo-list-wrapper">
      {todos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">아직 할 일이 없어요</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => {
            // 🌟 현재 카드가 수정 중인 카드인지 boolean으로 판별
            const isEditing = editingId === todo.id;

            return (
              <TodoCard
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                category={todo.category}
                isEditing={isEditing}         // props로 전달!
                editingText={editingText}     // props로 전달!
                onDelete={() => onDelete(todo.id)}
                onToggle={() => onToggle(todo.id)}
                onEditChange={onEditChange}
                onStartEdit={() => onStartEdit(todo.id, todo.text)}
                onSaveEdit={onSaveEdit}
                onCancelEdit={onCancelEdit}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;