const FILTER_CATEGORIES = ["전체", "공부", "운동", "개인", "업무"] as const;
type FilterCategory = (typeof FILTER_CATEGORIES)[number];

export default function TodoFilter({
  filterCategory,
  onFilterChange,
}: {
  filterCategory: string;
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
