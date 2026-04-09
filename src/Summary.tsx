import type { Todo } from "./types/todo.types";

function Summary({ todos }: { todos: Todo[] }) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.isDone).length;
  const notCompleted = total - completed;

  return (
    <div className="summary">
      <div className="summary-item">
        <span className="label">전체</span>
        <span className="value">{total}개</span>
      </div>

      <div className="summary-item">
        <span className="label">완료</span>
        <span className="value completed">{completed}개</span>
      </div>

      <div className="summary-item">
        <span className="label">미완료</span>
        <span className="value not-completed">{notCompleted}개</span>
      </div>
    </div>
  );
}

export default Summary;