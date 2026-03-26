// src/components/TodoHeader.tsx

const TodoHeader = () => {
  const mainTitle = "✅ 오늘의 할 일";

  return (
    <header className="todo-header">
      <h1 className="header-title">{mainTitle}</h1>
    </header>
  );
};

export default TodoHeader;