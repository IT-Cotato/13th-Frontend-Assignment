// src/components/TodoList.tsx

import TodoCard from './TodoCard';

// 1. 부모에게서 받을 데이터의 타입 정하기

interface TodoListProps {
  todos: Todo[]; 
}

// 2. 괄호 안에 { todos }: TodoListProps 를 넣어서 외부 데이터 받아오기

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="todo-list-wrapper">
      
      {/* 3. 받아온 todos 배열의 길이에 따라 빈 화면을 보여줄지 결정*/}
      {todos.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p className="empty-text">아직 할 일이 없어요</p>
        </div>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              content={todo.content}
              isDone={todo.isDone}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default TodoList;