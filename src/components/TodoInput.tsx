import "./TodoInput.css"

type Props = {
  inputText: string;
  onChangeInput: (value: string) => void;
  onAddTodo: () => void;
};

function TodoInput({ inputText, onChangeInput, onAddTodo }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <input 
        type="text" 
        aria-label="할 일 입력"
        placeholder="할 일을 입력하세요" 
        className="todo-input" 
        value={inputText}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button type="submit" className="add-button">추가</button>
    </form>
  );
}

export default TodoInput;