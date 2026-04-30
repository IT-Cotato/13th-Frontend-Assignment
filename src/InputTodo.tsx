interface InputTodoProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
  placeholder: string;
  category: string;
  setCategory: (value: string) => void;
}

function InputTodo({
  input,
  setInput,
  onAdd,
  placeholder,
  category,
  setCategory,
}: InputTodoProps) {
  return (
    <>
      <form
        className="input-row"
        onSubmit={(e) => {
          e.preventDefault();
          onAdd();
        }}
      >
        <input
          className="todo-input"
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" type="submit">
          추가
        </button>
      </form>

      <div className="category-row">
        <button
          type="button"
          className={`category-btn study ${category === "공부" ? "active" : ""}`}
          onClick={() => setCategory("공부")}
        >
          공부
        </button>

        <button
          type="button"
          className={`category-btn workout ${category === "운동" ? "active" : ""}`}
          onClick={() => setCategory("운동")}
        >
          운동
        </button>

        <button
          type="button"
          className={`category-btn personal ${category === "개인" ? "active" : ""}`}
          onClick={() => setCategory("개인")}
        >
          개인
        </button>

        <button
          type="button"
          className={`category-btn work ${category === "업무" ? "active" : ""}`}
          onClick={() => setCategory("업무")}
        >
          업무
        </button>
      </div>
    </>
  );
}

export default InputTodo;