type SearchProps = {
  search: string;
  setSearch: (value: string) => void;

  filterCategory: string;
  setFilterCategory: (value: string) => void;
};

function Search({
  search,
  setSearch,
  filterCategory,
  setFilterCategory,
}: SearchProps) {
  const categories = [
    { label: "전체", value: "전체", className: "전체" },
    { label: "공부", value: "공부", className: "공부" },
    { label: "운동", value: "운동", className: "운동" },
    { label: "개인", value: "개인", className: "개인" },
    { label: "업무", value: "업무", className: "업무" },
  ];

  return (
    <>
      <div className="search-container">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="할 일 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="category-row">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setFilterCategory(cat.value)}
            className={`category-filter btn ${cat.className} ${
              filterCategory === cat.value ? "active" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </>
  );
}

export default Search;