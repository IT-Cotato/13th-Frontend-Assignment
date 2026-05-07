import './CategoryFilter.css';
import type { TodoCategory } from '../types/todo';

type FilterCategory = '전체' | TodoCategory;

type Props = {
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
};

const categories: FilterCategory[] = [
  '전체',
  '공부',
  '운동',
  '개인',
  '업무',
];

function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="filter-list">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`
            filter-button
            filter-button-${category}
            ${selectedCategory === category ? 'selected' : ''}
          `}
          onClick={() => onSelectCategory(category)}
          aria-pressed={selectedCategory === category}
        >             
        {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;