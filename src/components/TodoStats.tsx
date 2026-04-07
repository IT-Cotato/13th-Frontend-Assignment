import './TodoStats.css';

interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

interface TodoStatsProps {
  todos: Todo[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const progressCount = totalCount - completedCount;

  return (
    <div className="todo-stats-wrapper">
      <div className="todo-stats-content">
        <div className="stat-item">
          전체 <span className="stat-all">{totalCount}개</span>
        </div>
        <div className="stat-item">
          완료 <span className="stat-complete">{completedCount}개</span>
        </div>
        <div className="stat-item">
          미완료 <span className="stat-progress">{progressCount}개</span>
        </div>
      </div>
    </div>
  );
}