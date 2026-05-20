import type Todo from "./types/todo";

const FILTER_CATEGORIES = ["전체", "공부", "운동", "개인", "업무"] as const;
export type FilterCategory = "전체" | Todo["category"];

export default function TodoFilter({
  filterCategory,
  onFilterChange,
}: {
  filterCategory: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}) {
  return (
    <div className="filter-category-bar">
      {FILTER_CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`category-button category-${cat} ${filterCategory === cat ? "selected" : ""}`}
          onClick={() => onFilterChange(cat)}
          aria-pressed={filterCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
