import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import type { Todo, TodoCategory } from "./types/todo";

function App() {
  const title = "오늘의 할 일";
  const icon = "✅";

  const [inputValue, setInputValue] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "운동 30분 하기", completed: false, category: "공부" },
    { id: 2, text: "프로젝트 회의 준비", completed: false, category: "공부" },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategory>("공부");

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

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const incompleteCount = totalCount - completedCount;

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="flex flex-col items-start gap-5">
        <TodoHeader icon={icon} title={title} />

        <TodoCounter
          totalCount={totalCount}
          completedCount={completedCount}
          incompleteCount={incompleteCount}
        />

        <TodoInput
          value={inputValue}
          selectedCategory={selectedCategory}
          onChange={setInputValue}
          onChangeCategory={setSelectedCategory}
          onAdd={handleAddTodo}
        />

        <TodoList
          todos={todos}
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
