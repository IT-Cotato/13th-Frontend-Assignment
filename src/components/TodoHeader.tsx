// src/components/TodoHeader.tsx
import React from 'react';

const TodoHeader = () => {
<<<<<<< Updated upstream
  const mainTitle = "✅ 오늘의 할 일"; // JSX 바인딩을 위한 변수
=======
  const mainTitle = "✅ 오늘의 할 일"; // JSX 바인딩 변수
>>>>>>> Stashed changes

  return (
    <header className="todo-header">
      <h1 className="header-title">{mainTitle}</h1>
    </header>
  );
};

export default TodoHeader;