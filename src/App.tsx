import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import { useState } from "react";
//import type { Todo } from "./types/todo.types";
import Summary from "./Summary";
import Search from "./Search";
import type {
  Todo,
  TodoCategory,
  FilterCategory,
} from "./types/todo.types";

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [input, setInput] = useState("");
  const [category, setCategory] =
    useState<TodoCategory>("공부");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] =
    useState<FilterCategory>("전체");

  const handleAdd = () => {
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input.trim(),
        completed: false,
        category,
      },
    ]);

    setInput("");
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const handleEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleUpdate = (id: number) => {
    const trimmedText = editText.trim();

    if (!trimmedText) return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: trimmedText }
          : todo
      )
    );

    setEditingId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.text
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      filterCategory === "전체" ||
      todo.category === filterCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>

      <Summary todos={todos} />

      <InputTodo
        input={input}
        setInput={setInput}
        onAdd={handleAdd}
        placeholder="할 일을 입력하세요"
        category={category}
        setCategory={setCategory}
      />

      <div className="divider"></div>

      <Search
        search={search}
        setSearch={setSearch}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />

      <div className="container">
        {todos.length === 0 ? (
        <p>아직 할 일이 없어요.</p>
        ) : filteredTodos.length === 0 ? (
        <p>검색 결과가 없습니다.</p>
        ) : (
        <TodoList
        todos={filteredTodos}
        onDelete={handleDelete}
        onToggle={handleToggle}
        editingId={editingId}
        editText={editText}
        setEditText={setEditText}
        onEdit={handleEdit}
        onUpdate={handleUpdate}
        onCancel={handleCancel}
        />
      )}
      </div>
    </div>
  );
}

export default App;