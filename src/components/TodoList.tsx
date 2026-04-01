import TodoCard from './TodoCard';

export default function TodoList() {
  // 🌟 1. 할 일 배열: 과제 조건(2, 3) 달성을 위해 빈 배열로 만듭니다.
  const todos: any[] = []; 

  // 🌟 2. 조건부 렌더링: 배열이 비어있을 때 빈 컨테이너 반환
  if (todos.length === 0) {
    return (
      // CSS 클래스명은 스타일이 적용되도록 todo-empty-container로 맞췄습니다.
      <div className="todo-empty-container">
        <span className="empty-icon">📋</span>
        <p className="empty-text">아직 할 일이 없어요</p>
      </div>
    );
  }

  // 3. 배열에 항목이 있을 때 리스트 렌더링
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