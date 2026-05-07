import type { Category } from '../types/todo';
import './FilterCategory.css';

export type FilterCategory = '전체' | Category;

interface FilterCategoryProps {
  selected: FilterCategory;
  onSelect: (category: FilterCategory) => void;
}

const FILTER_CATEGORIES: FilterCategory[] = ['전체', '공부', '운동', '개인', '업무'];

export default function FilterCategory({ selected, onSelect }: FilterCategoryProps) {
  return (
    <div className="filter-container">
      {FILTER_CATEGORIES.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-button ${category} ${selected === category ? 'selected' : ''}`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
