// src/components/TodoCard.tsx

interface TodoCardProps {
    task: string;
    isDone: boolean;
  }
  
  export default function TodoCard({ task, isDone }: TodoCardProps) {
    return (
      <div className="todo-card">
        <div className={`checkbox-container ${isDone ? 'checked' : 'unchecked'}`}>
          {isDone && (
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
  
        <div className="task-content">

          <h3 className={`task-title ${isDone ? 'done-text' : ''}`}>
            {task}
          </h3>
          
          
        </div>
      </div>
    );
  }