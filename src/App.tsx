import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import TodoCategory from "./components/TodoCategory";
import type { Todo } from "./types/todo";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "리액트 공식문서 읽기", completed: true, category: "공부" },
    { id: 1, text: "알고리즘 문제 풀기", completed: true, category: "공부" },
    { id: 2, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 3, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 4, text: "장보기 하기", completed: false, category: "개인" },
  ]);

  const [selectedInputCategory, setSelectedInputCategory] = useState("공부");
  const [selectedSearchCategory, setSelectedSearchCategory] = useState("전체");

  const [searchText, setSearchText] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed === true);

  const incompletedTodos = todos.filter((todo) => todo.completed === false);

  const handleAddTodo = (newTodoText: string) => {

    const trimmedText = newTodoText.trim(); // 앞뒤 공백을 제거한 텍스트를 저장

    if (trimmedText.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      const newIndex = prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 0;

      const newTodo = {
        id: newIndex,
        text: trimmedText,
        completed: false,
        category: selectedInputCategory
      };

      return [...prevTodos, newTodo];

    });
  };

  const handleUpdateTodo = (updatedId: number, updatedText: string) => {

    const trimmedText = updatedText.trim();

    if (trimmedText.length === 0) {
      return;
    }

    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) => 
        todo.id === updatedId ? {...todo, text: trimmedText} : todo
      );

      return newTodos;
    });
  }

  const handleDeleteTodo = (deletedId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== deletedId));
  };

  const handleCompletedStatus = (targetId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === targetId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const filterTodos = todos.filter((todo) => ((todo.text.includes(searchText)) && (selectedSearchCategory==="전체" || todo.category===selectedSearchCategory)));
  
  return (
    <>
      <div className="todoContainer">
        <TodoHeader />
        <TodoCounter
          totalCount={todos.length}
          completedCount={completedTodos.length}
          incompletedCount={incompletedTodos.length}
        />
        <TodoInput handleAddTodo={handleAddTodo} />
        <TodoCategory isShowAll={false} selected={selectedInputCategory} onSelect={setSelectedInputCategory} name="input" />
        <hr className="border-[rgba(229,231,235,1)]" />
        <Search searchText={searchText} onSeachChange={setSearchText} />
        <TodoCategory isShowAll={true} selected={selectedSearchCategory} onSelect={setSelectedSearchCategory} name="search" />
        <TodoList todos={filterTodos} searchText={searchText} handleCompletedStatus={handleCompletedStatus} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </>
  );
}

export default App; // 기본 내보내기
