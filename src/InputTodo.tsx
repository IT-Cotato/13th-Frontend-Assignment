interface InputTodoProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
  placeholder: string; 
}

function InputTodo({ input, setInput, onAdd, placeholder }: InputTodoProps) {
  return (
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
  );
}

export default InputTodo;