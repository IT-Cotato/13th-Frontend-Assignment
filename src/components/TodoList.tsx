// src/components/TodoList.tsx
import TodoCard from './TodoCard';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 부모로부터 onToggle 함수를 받을 수 있도록 타입 추가
interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void; // ✅ 추가됨
}

const TodoList = ({ todos, onDelete, onToggle }: TodoListProps) => {
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
              text={todo.text}
              completed={todo.completed}
              onDelete={() => onDelete(todo.id)} 
              onToggle={() => onToggle(todo.id)} // ✅ 개별 카드에 토글 함수와 id 전달
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default TodoList;