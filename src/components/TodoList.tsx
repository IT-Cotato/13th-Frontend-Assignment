import TodoCard from './TodoCard';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// 부모로부터 onDelete 함수를 받을 수 있도록 타입 추가
interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onDelete }: TodoListProps) => {
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

              // 삭제 버튼 클릭 시 현재 항목의 id를 담아 실행하도록 함수 전달
              onDelete={() => onDelete(todo.id)} 
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default TodoList;