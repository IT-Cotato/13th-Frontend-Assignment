import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos as initialTodos } from "./todos.data";
import InputTodo from "./InputTodo";
import Summary from "./Summary";
import Search from "./Search";
import { useState, useReducer } from "react";   // useReducer 추가
import { todoReducer, editReducer, editInitialState } from "./reducers/todoReducer";
import type { TodoCategory, FilterCategory } from "./types/todo.types";

function App() {
  const [todos, dispatch]     = useReducer(todoReducer, initialTodos);
  const [editState, editDispatch] = useReducer(editReducer, editInitialState);

  const [input, setInput]               = useState("");
  const [category, setCategory]         = useState<TodoCategory>("공부");
  const [search, setSearch]             = useState("");
  const [filterCategory, setFilterCategory] = useState<FilterCategory>("전체");

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD", payload: { text: input, category } });
    setInput(""); 
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: { id } });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  };

  const handleEdit = (id: number, text: string) => {
    editDispatch({ type: "START_EDIT", payload: { id, text } });
  };

  const handleUpdate = (id: number) => {
    const trimmed = editState.editText.trim();
    if (!trimmed) return;
    dispatch({ type: "UPDATE", payload: { id, text: trimmed } });
    editDispatch({ type: "CANCEL_EDIT" });
  };

  const handleCancel = () => {
    editDispatch({ type: "CANCEL_EDIT" });
  };

  const filteredTodos = todos.filter((todo) => {
    const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      filterCategory === "전체" || todo.category === filterCategory;
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
            editingId={editState.editingId}          
            editText={editState.editText}             
            setEditText={(text) =>
              editDispatch({ type: "CHANGE_TEXT", payload: { text } })
            }
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
