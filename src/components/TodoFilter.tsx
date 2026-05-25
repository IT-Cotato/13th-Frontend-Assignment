import type { TodoFilterCategory } from '../types/todo.types';

type TodoFilterProps = {
  searchText: string;
  filterCategory: TodoFilterCategory;
  categories: TodoFilterCategory[];
  onSearchChange: (text: string) => void;
  onFilterChange: (category: TodoFilterCategory) => void;
};

export default function TodoFilter({
  searchText,
  filterCategory,
  categories,
  onSearchChange,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <section className="todo-filter-section" aria-label="할 일 필터">
      <div className="todo-search-box">
        <span className="todo-search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          className="todo-search-input"
          type="text"
          placeholder="할 일 검색..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-buttons" aria-label="카테고리 필터">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button category-${category} ${
              filterCategory === category ? 'is-selected' : ''
            }`}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
