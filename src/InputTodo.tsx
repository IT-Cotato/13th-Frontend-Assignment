interface InputTodoProps {
  input: string;
  setInput: (value: string) => void;
  onAdd: () => void;
  placeholder: string; 
}

function InputTodo({ input, setInput, onAdd, placeholder }: InputTodoProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onAdd();
  };

  return (
    <div className="input-row">
      <input
        className="todo-input"
        type="text"
        placeholder={placeholder} 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-button" onClick={onAdd}>
        추가
      </button>
    </div>
  );
}

export default InputTodo;