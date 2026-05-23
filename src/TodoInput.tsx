import type Todo from "./types/todo";
import { CATEGORIES } from "./types/categories";

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
        {CATEGORIES.map(({ value, color }) => (
          <button
            key={value}
            type="button"
            className={`category-button ${selectedCategory === value ? "selected" : ""}`}
            style={{
              borderColor: color,
              color: selectedCategory === value ? "#fff" : color,
              background: selectedCategory === value ? color : "#fff",
              border: `2px solid ${color}`,
            }}
            onClick={() => onCategoryChange(value)}
            aria-pressed={selectedCategory === value}
          >
            {value}
          </button>
        ))}
      </div>
    </>
  );
}
