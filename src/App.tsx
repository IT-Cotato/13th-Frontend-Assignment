import { useMemo, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import type { Todo, TodoCategory } from "./types/todo";

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const [inputValue, setInputValue] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategory>("공부");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filterCategory, setFilterCategory] = useState<"전체" | TodoCategory>(
    "전체",
  );

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "리액트 공식문서 읽기", completed: true, category: "공부" },
    { id: 2, text: "알고리즘 문제 풀기", completed: true, category: "공부" },
    { id: 3, text: "운동 30분 하기", completed: false, category: "운동" },
    { id: 4, text: "프로젝트 회의 준비", completed: false, category: "업무" },
    { id: 5, text: "장보기 하기", completed: false, category: "개인" },
    { id: 6, text: "블로그 포스팅 작성", completed: false, category: "업무" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  };

  const handleStartEdit = (id: number) => {
    const targetTodo = todos.find((todo) => todo.id === id);

    if (!targetTodo) {
      return;
    }

    setEditingId(id);
    setEditingText(targetTodo.text);
  };

  const handleSaveEdit = (id: number) => {
    const trimmedText = editingText.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: trimmedText,
            }
          : todo,
      ),
    );

    setEditingId(null);
    setEditingText("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedValue,
      completed: false,
      category: selectedCategory,
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    setInputValue("");
  };

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesKeyword = todo.text
        .toLowerCase()
        .includes(searchKeyword.toLowerCase());

      const matchesCategory =
        filterCategory === "전체" ? true : todo.category === filterCategory;

      return matchesKeyword && matchesCategory;
    });
  }, [todos, searchKeyword, filterCategory]);

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const inCompleteCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="flex w-full max-w-[640px] flex-col items-start gap-5">
        <TodoHeader icon={icon} title={title} />

        <TodoCounter
          totalCount={totalCount}
          completedCount={completedCount}
          inCompleteCount={inCompleteCount}
        />

        <TodoInput
          value={inputValue}
          selectedCategory={selectedCategory}
          onChange={setInputValue}
          onChangeCategory={setSelectedCategory}
          onAdd={handleAddTodo}
        />

        <TodoSearch
          keyword={searchKeyword}
          selectedCategory={filterCategory}
          onChangeKeyword={setSearchKeyword}
          onChangeCategory={setFilterCategory}
        />

        <TodoList
          todos={todos}
          filteredTodos={filteredTodos}
          editingId={editingId}
          editingText={editingText}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onStartEdit={handleStartEdit}
          onChangeEditingText={setEditingText}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
        />
      </div>
    </div>
  );
}

export default App;
