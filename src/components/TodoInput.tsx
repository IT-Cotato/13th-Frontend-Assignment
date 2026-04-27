import type { TodoCategory } from "../types/todo";

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

  const getCategoryButtonClass = (
    category: TodoCategory,
    isSelected: boolean,
  ) => {
    const base =
      "flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium leading-5 outline outline-2 outline-offset-[-2px]";

    if (category === "공부") {
      return isSelected
        ? `${base} bg-blue-500 text-white outline-blue-500`
        : `${base} bg-white text-blue-500 outline-blue-500`;
    }

    if (category === "운동") {
      return isSelected
        ? `${base} bg-green-500 text-white outline-green-500`
        : `${base} bg-white text-green-500 outline-green-500`;
    }

    if (category === "개인") {
      return isSelected
        ? `${base} bg-purple-500 text-white outline-purple-500`
        : `${base} bg-white text-purple-500 outline-purple-500`;
    }

    return isSelected
      ? `${base} bg-amber-500 text-white outline-amber-500`
      : `${base} bg-white text-amber-500 outline-amber-500`;
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
        <button
          type="button"
          onClick={() => onChangeCategory("공부")}
          className={getCategoryButtonClass(
            "공부",
            selectedCategory === "공부",
          )}
        >
          공부
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("운동")}
          className={getCategoryButtonClass(
            "운동",
            selectedCategory === "운동",
          )}
        >
          운동
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("개인")}
          className={getCategoryButtonClass(
            "개인",
            selectedCategory === "개인",
          )}
        >
          개인
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("업무")}
          className={getCategoryButtonClass(
            "업무",
            selectedCategory === "업무",
          )}
        >
          업무
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
