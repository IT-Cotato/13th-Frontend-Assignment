import TodoCard from './TodoCard';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string; // 카테고리 속성 추가
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void; // onEdit 타입 추가
}

const TodoList = ({ todos, onDelete, onToggle, onEdit }: TodoListProps) => {
  return (
    <div className="todo-list-wrapper">
      
      {todos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">아직 할 일이 없어요</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id} // id 전달 추가 (수정/삭제 시 필요)
              text={todo.text}
              completed={todo.completed}
              category={todo.category} // 카테고리 전달
              onDelete={() => onDelete(todo.id)}
              onToggle={() => onToggle(todo.id)}
              onEdit={onEdit} // 수정 함수 전달
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;