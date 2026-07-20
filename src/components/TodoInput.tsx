import type { TodoCategory } from "../types/todo";
import {
  BASE_CATEGORY_BUTTON_CLASS,
  CATEGORY_OPTIONS,
} from "../constants/categories";

type TodoInputProps = {
  value: string;
  selectedCategory: TodoCategory;
  onChange: (value: string) => void;
  onChangeCategory: (category: TodoCategory) => void;
  onAdd: () => void;
};

function TodoInput({
  value,
  selectedCategory,
  onChange,
  onChangeCategory,
  onAdd,
}: TodoInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <form onSubmit={handleSubmit} className="flex items-start gap-3">
        <input
          type="text"
          value={value}
          placeholder="할 일을 입력하세요"
          onChange={(e) => onChange(e.target.value)}
          className="h-12 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-normal text-gray-800 outline-none placeholder:text-gray-500 focus:shadow-[0px_0px_0px_4px_rgba(59,130,246,1.00)] focus:outline focus:outline-[0.8px] focus:outline-offset-[-0.8px] focus:outline-blue-500"
        />

        <button
          type="submit"
          className="h-12 w-20 rounded-lg bg-blue-500 text-sm font-medium leading-5 text-white"
        >
          추가
        </button>
      </form>

      <div className="flex items-start gap-3">
        {CATEGORY_OPTIONS.map((category) => {
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

export default TodoInput;
