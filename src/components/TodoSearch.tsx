import type { TodoCategory } from "../types/todo";

type TodoSearchProps = {
  keyword: string;
  selectedCategory: "전체" | TodoCategory;
  onChangeKeyword: (value: string) => void;
  onChangeCategory: (category: "전체" | TodoCategory) => void;
};

function TodoSearch({
  keyword,
  selectedCategory,
  onChangeKeyword,
  onChangeCategory,
}: TodoSearchProps) {
  const getFilterButtonClass = (category: "전체" | TodoCategory) => {
    const base =
      "flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium leading-5 outline outline-2 outline-offset-[-2px]";

    if (category === "전체") {
      return selectedCategory === "전체"
        ? `${base} bg-gray-800 text-white outline-gray-800`
        : `${base} bg-white text-gray-800 outline-gray-800`;
    }

    if (category === "공부") {
      return selectedCategory === "공부"
        ? `${base} bg-blue-500 text-white outline-blue-500`
        : `${base} bg-white text-blue-500 outline-blue-500`;
    }

    if (category === "운동") {
      return selectedCategory === "운동"
        ? `${base} bg-green-500 text-white outline-green-500`
        : `${base} bg-white text-green-500 outline-green-500`;
    }

    if (category === "개인") {
      return selectedCategory === "개인"
        ? `${base} bg-purple-500 text-white outline-purple-500`
        : `${base} bg-white text-purple-500 outline-purple-500`;
    }

    return selectedCategory === "업무"
      ? `${base} bg-amber-500 text-white outline-amber-500`
      : `${base} bg-white text-amber-500 outline-amber-500`;
  };

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
        <button
          type="button"
          onClick={() => onChangeCategory("전체")}
          className={getFilterButtonClass("전체")}
        >
          전체
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("공부")}
          className={getFilterButtonClass("공부")}
        >
          공부
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("운동")}
          className={getFilterButtonClass("운동")}
        >
          운동
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("개인")}
          className={getFilterButtonClass("개인")}
        >
          개인
        </button>

        <button
          type="button"
          onClick={() => onChangeCategory("업무")}
          className={getFilterButtonClass("업무")}
        >
          업무
        </button>
      </div>
    </div>
  );
}

export default TodoSearch;
