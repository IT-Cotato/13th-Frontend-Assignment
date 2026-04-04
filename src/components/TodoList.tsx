import TodoCard from "./TodoCard";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onDelete }: TodoListProps) {
  const isEmpty = todos.length === 0;

  return (
    <>
      {isEmpty && (
        <div className="emptyList">
          <div className="emptyContainer">
            <div className="emptyIcon">📋</div>
            <div className="emptyText">아직 할 일이 없어요</div>
          </div>
        </div>
      )}

      {!isEmpty && (
        <ul className="toDoList">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
}
