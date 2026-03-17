import "./css/TodoHeader.css";

export default function TodoHeader() {
    const emoji = "✅";
    const title = "오늘의 할 일";
  
    return (
      <div className="todo-header-wrapper">
        <div className="todo-header-row">
          <span className="todo-header-text">{emoji}</span>
          <span className="todo-header-text">{title}</span>
        </div>
      </div>
    );
  }