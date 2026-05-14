import "./TodoInput.css"
import type { TodoCategory } from "../types/todo";

type Props = {
  inputText: string;
  selectedCategory: TodoCategory;
  onChangeInput: (value: string) => void;
  onChangeCategory: (value: TodoCategory) => void;
  onAddTodo: () => void;
};

const categories: TodoCategory[] = ['공부', '운동', '개인', '업무'];

function TodoInput({ inputText, selectedCategory, onChangeInput, onChangeCategory, onAddTodo }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <div className="input-row">
        <input 
          type="text" 
          aria-label="할 일 입력"
          placeholder="할 일을 입력하세요" 
          className="todo-input" 
          value={inputText}
          onChange={(e) => onChangeInput(e.target.value)}
        />
        <button type="submit" className="add-button">추가</button>
      </div>

      <div className="category-list" aria-label="카테고리 선택">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-button category-button-${category} ${
              selectedCategory === category ? 'selected' : ''
            }`}
            onClick={() => onChangeCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </form>
  );
}

export default TodoInput;