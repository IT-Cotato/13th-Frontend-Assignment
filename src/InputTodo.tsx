type InputTodoProps = {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
  placeholder: string;
  category: string;
  setCategory: (value: string) => void;
};

function InputTodo({
  input,
  setInput,
  onAdd,
  placeholder,
  category,
  setCategory,
}: InputTodoProps) {
  const categories = [
    { label: "공부", value: "study" },
    { label: "운동", value: "workout" },
    { label: "개인", value: "personal" },
    { label: "업무", value: "work" },
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
            className={`category-btn ${cat.value} ${
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