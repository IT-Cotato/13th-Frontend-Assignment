import type { Todo } from "../types/todo";
import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  handleCompletedStatus,
  handleUpdateTodo,
  handleDeleteTodo,
}: {
  todos: Todo[];
  handleCompletedStatus: (targetId: number) => void;
  handleUpdateTodo: (updatedId: number, updatedText: string) => void;
  handleDeleteTodo: (deletedId: number) => void;
}) {
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
              todo={todo}
              handleCompletedStatus={handleCompletedStatus}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
