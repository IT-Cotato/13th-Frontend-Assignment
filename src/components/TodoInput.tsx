import '../css/TodoInput.css';
import { useState } from 'react';
import type { TodoCategory } from '../types/todo.types';

const CATEGORIES = ['공부', '운동', '개인', '업무'] satisfies TodoCategory[];

type TodoInputProps = {
  onAdd: (text: string, category: TodoCategory) => void;
};

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<TodoCategory>(CATEGORIES[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd(value, selectedCategory);
  };

  return (
    <div className="todo-input-section">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-input"
          type="text"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
