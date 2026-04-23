import TodoCard from "./TodoCard";

export default function TodoList({
  todos,
  handleCompletedStatus,
  handleDeleteTodo,
}: {
  todos: { id: number; text: string; completed: boolean }[];
  handleCompletedStatus: (targetId: number) => void;
  handleDeleteTodo: (dleletedId: number) => void;
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
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              handleCompletedStatus={handleCompletedStatus}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}
