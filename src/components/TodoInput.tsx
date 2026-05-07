import '../css/TodoInput.css';
import type { TodoCategory } from '../types/todo.types';

const CATEGORIES: TodoCategory[] = ['공부', '운동', '개인', '업무'];

type TodoInputProps = {
  value: string;
  selectedCategory: TodoCategory;
  onChange: (text: string) => void;
  onCategoryChange: (category: TodoCategory) => void;
  onAdd: () => void;
};

export default function TodoInput({
  value,
  selectedCategory,
  onChange,
  onCategoryChange,
  onAdd,
}: TodoInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd();
  };

  return (
    <div className="todo-input-section">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" className="todo-button">
          추가
        </button>
      </form>

      <div className="category-selector" aria-label="카테고리 선택">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            className={`category-button category-${category} ${
              selectedCategory === category ? 'is-selected' : ''
            }`}
            aria-pressed={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
