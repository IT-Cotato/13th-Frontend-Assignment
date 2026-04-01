import "./TodoInput.css"

type Props = {
  inputText: string;
  onChangeInput: (value: string) => void;
  onAddTodo: () => void;
};

function TodoInput({ inputText, onChangeInput, onAddTodo }: Props) {
  return (
    <div className="input-section">
      <input 
        type="text" 
        placeholder="할 일을 입력하세요" 
        className="todo-input" 
        value={inputText}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <button className="add-button" onClick={onAddTodo}>추가</button>
    </div>
  );
}

export default TodoInput;