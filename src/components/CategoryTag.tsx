import './CategoryTag.css';
import type { Category } from '../types/todo';

export type { Category };

interface CategoryTagProps {
  selectedCategory: Category;
  onSelect: (category: Category) => void;
}

const CATEGORIES: Category[] = ['공부', '운동', '개인', '업무'];

export default function CategoryTag({ selectedCategory, onSelect }: CategoryTagProps) {
  return (
    <div className="category-container">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-button ${category} ${
            selectedCategory === category ? 'selected' : ''
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}