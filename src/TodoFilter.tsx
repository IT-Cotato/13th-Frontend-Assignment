import {
  CATEGORIES,
  FILTER_CATEGORIES,
  type FilterCategory,
} from "./types/categories";
export type { FilterCategory } from "./types/categories";

export default function TodoFilter({
  filterCategory,
  onFilterChange,
}: {
  filterCategory: FilterCategory;
  onFilterChange: (category: FilterCategory) => void;
}) {
  return (
    <div className="filter-category-bar">
      {FILTER_CATEGORIES.map((cat) => {
        const style = CATEGORIES.find((c) => c.value === cat);
        const color = style?.color ?? "#1f2937"; // "전체"는 fallback 색상
        const isSelected = filterCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            className={`category-button ${isSelected ? "selected" : ""}`}
            style={{
              borderColor: color,
              color: isSelected ? "#fff" : color,
              background: isSelected ? color : "#fff",
              border: `2px solid ${color}`,
            }}
            onClick={() => onFilterChange(cat)}
            aria-pressed={isSelected}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
