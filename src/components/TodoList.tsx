import TodoCard from './TodoCard';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

interface TodoListProps {
  todos: Todo[];
  totalTodosCount: number;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoList = ({ todos, totalTodosCount, onDelete, onToggle, onEdit }: TodoListProps) => {
  return (
    <div className="todo-list-wrapper">
      
      {/* 1. 전체 할 일이 0개일 때 (기본 빈 화면) */}
      {totalTodosCount === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">아직 할 일이 없어요</p>
        </div>
        
      {/* 2. 전체 할 일은 있는데, 검색/필터 결과가 0개일 때 (시안 반영) */}
      ) : todos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">🔍</span>
          <p className="empty-text">검색 결과가 없습니다</p>
        </div>
        
      {/* 3. 데이터가 있을 때 목록 렌더링 */}
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              category={todo.category}
              onDelete={() => onDelete(todo.id)} 
              onToggle={() => onToggle(todo.id)} 
              onEdit={(newText) => onEdit(todo.id, newText)} 
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default TodoList;