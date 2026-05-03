import TodoCard from './TodoCard';

export default function TodoList() {

  const todos: any[] = []; 


  if (todos.length === 0) {
    return (
      <div className="todo-empty-container">
        <span className="empty-icon">📋</span>
        <p className="empty-text">아직 할 일이 없어요</p>
      </div>
    );
  }


  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id}          
          task={todo.task}       
          isDone={todo.isDone}   
        />
      ))}
    </div>
  );
}