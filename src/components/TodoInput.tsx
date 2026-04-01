import "./TodoInput.css"

function TodoInput() {
  return (
    <div className="input-section">
      <input 
        type="text" 
        placeholder="할 일을 입력하세요" 
        className="todo-input" 
      />
      <button className="add-button">추가</button>
    </div>
  );
}

export default TodoInput;