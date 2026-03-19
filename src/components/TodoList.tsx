// src/components/TodoList.tsx
import React from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const todo1 = "리액트 공식문서 읽기";
  const todo2 = "알고리즘 문제 풀기";
  const todo3 = "운동 30분 하기";
  const todo4 = "프로젝트 회의 준비";<q></q>

  return (
    <main className="todo-list">
      <TodoCard content={todo1} />
      <TodoCard content={todo2} />
      <TodoCard content={todo3} />
      <TodoCard content={todo4} />
    </main>
  );
};

export default TodoList;