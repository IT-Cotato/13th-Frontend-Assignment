import type { Todo } from "../types/todo";
import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  searchText,
  handleCompletedStatus,
  handleUpdateTodo,
  handleDeleteTodo,
}: {
  todos: Todo[];
  searchText: string,
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
            <div className="emptyText">{searchText ? "검색 결과가 없어요" : "아직 할 일이 없어요"}</div>
          </div>
        </div>
      )}

      {!isEmpty && (
        <ul className="toDoList">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
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
