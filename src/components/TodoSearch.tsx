import {
  BASE_CATEGORY_BUTTON_CLASS,
  FILTER_OPTIONS,
} from "../constants/categories";
import type { FilterCategory } from "../constants/categories";

type TodoSearchProps = {
  keyword: string;
  selectedCategory: FilterCategory;
  onChangeKeyword: (value: string) => void;
  onChangeCategory: (category: FilterCategory) => void;
};

function TodoSearch({
  keyword,
  selectedCategory,
  onChangeKeyword,
  onChangeCategory,
}: TodoSearchProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="h-px w-full bg-gray-200" />

      <div className="flex h-12 w-full items-center gap-3 rounded-xl border border-gray-200 bg-white px-4">
        <span className="text-xl text-gray-500">🔍</span>
        <input
          type="text"
          value={keyword}
          placeholder="할 일 검색..."
          onChange={(e) => onChangeKeyword(e.target.value)}
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
        />
      </div>

      <div className="flex items-start gap-3">
        {FILTER_OPTIONS.map((category) => {
          const isSelected = selectedCategory === category.value;

          return (
            <button
              key={category.value}
              type="button"
              onClick={() => onChangeCategory(category.value)}
              className={`${BASE_CATEGORY_BUTTON_CLASS} ${
                isSelected ? category.selectedClass : category.defaultClass
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default TodoSearch;
