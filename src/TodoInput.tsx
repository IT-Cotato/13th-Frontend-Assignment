import type Todo from "./types/todo";

const INPUT_CATEGORIES = ["공부", "운동", "개인", "업무"] as const;

export default function TodoInput({
  inputValue,
  selectedCategory,
  onInputChange,
  onCategoryChange,
  onSubmit,
}: {
  inputValue: string;
  selectedCategory: Todo["category"];
  onInputChange: (value: string) => void;
  onCategoryChange: (category: Todo["category"]) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <>
      <form className="inputContainer" onSubmit={onSubmit}>
        <input
          className="todoInput"
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
        <button className="addButton" type="submit">
          추가
        </button>
      </form>

      <div className="category-selector">
        {INPUT_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`category-button category-${cat} ${selectedCategory === cat ? "selected" : ""}`}
            onClick={() => onCategoryChange(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}
