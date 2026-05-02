import TodoEmpty from "./component/TodoEmpty"
import TodoHeader from "./component/TodoHeader"
import TodoList from "./component/TodoList"
import TodoInput from "./component/TodoInput"
import { useState } from "react";
import TodoStatus from "./component/TodoStatus";
import { type CategoryType, CATEGORY_STYLES } from "./constants/category";

interface TodoItem {
  id: number;
  content: string;
  isDone: boolean;
  category: CategoryType;
}


function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, content: "리액트 공식문서 읽기", isDone: true, category: "공부" },
    { id: 2, content: "알고리즘 문제 풀기", isDone: true, category: "공부" },
    { id: 3, content: "운동 30분 하기", isDone: false, category: "운동" },
    { id: 4, content: "프로젝트 회의 준비", isDone: false, category: "업무" },
    { id: 5, content: "장보기 하기", isDone: false, category: "개인" },
    { id: 6, content: "블로그 포스팅 작성", isDone: false, category: "업무" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("공부");

  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const pendingCount = totalCount - doneCount;

  const handleAdd = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      content: text,
      isDone: false,
      category: selectedCategory,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleUpdate = (id: number, newContent: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id? { ...todo, content: newContent } : todo
      )
    );
  }

  return (
    <>
    <div className="flex flex-col w-[640px] mt-[80px] ml-[445px] mr-[464px] gap-[22px]">
      <TodoHeader />
      <TodoStatus
        total={totalCount} 
        done={doneCount} 
        pending={pendingCount}
      />
      <TodoInput onAdd={handleAdd} />
      <div className="flex gap-3 h-[41px] items-center">
        {(["공부", "운동", "개인", "업무"] as CategoryType[]).map((cat) => {
          const isSelected = selectedCategory === cat;
          const style = CATEGORY_STYLES[cat];
          return (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center justify-center px-[18px] py-[10px] rounded-[8px] border-2 text-body transition-all
                ${isSelected? style.active: style.filter}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {todos.length > 0 ? (
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdate}/>
      ) : (
        <TodoEmpty />
      )}
    </div>
    </>
    
  )
}

export default App
