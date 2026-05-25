import type { TodoCategory } from "./types/todo.types";

type InputTodoProps = {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
  placeholder: string;

  category: TodoCategory;
  setCategory: (value: TodoCategory) => void;

};

function InputTodo({
  input,
  setInput,
  onAdd,
  placeholder,
  category,
  setCategory,
}: InputTodoProps) {
  const categories: {
    label: string;
    value: TodoCategory;
    className: string;
  }[] = [
    { label: "공부", value: "공부", className: "study" },
    { label: "운동", value: "운동", className: "workout" },
    { label: "개인", value: "개인", className: "personal" },
    { label: "업무", value: "업무", className: "work" },
  ];

  return (
    <div>
      <div className="input-row">
        <input
          className="todo-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
        />

        <button className="add-button" onClick={onAdd}>
          추가
        </button>
      </div>

      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`category-btn ${cat.className} ${
              category === cat.value ? "active" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default InputTodo;