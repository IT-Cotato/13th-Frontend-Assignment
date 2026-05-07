import type { FilterCategory } from "../types/todo";

const filterCategories: FilterCategory[] = ["전체","공부","운동","개인","업무"];

const filterCategoryStyles: Record<FilterCategory, { selected: string; unselected: string }> = {
    전체: {
      selected: "bg-[#1F2937] text-white",
      unselected: "border-[2px] border-[#1F2937] text-[#1F2937]",
    },
    공부: {
      selected: "bg-[#3B82F6] text-white",
      unselected: "border-[2px] border-[#3B82F6] text-[#3B82F6]",
    },
    운동: {
      selected: "bg-[#22C55E] text-white",
      unselected: "border-[2px] border-[#22C55E] text-[#22C55E]",
    },
    개인: {
      selected: "bg-[#A855F7] text-white",
      unselected: "border-[2px] border-[#A855F7] text-[#A855F7]",
    },
    업무: {
      selected: "bg-[#F59E0B] text-white",
      unselected: "border-[2px] border-[#F59E0B] text-[#F59E0B]",
    },
  };

  export default function TodoFilter({
    searchText,
    onChangeSearchText,
    selectedFilterCategory,
    onChangeFilterCategory,
  }: {
    searchText: string;
    onChangeSearchText: (text: string) => void;
    selectedFilterCategory: FilterCategory;
    onChangeFilterCategory: (category: FilterCategory) => void;
  }) {
    return (
      <div className="flex w-full flex-col gap-[24px]">
        <div className="relative w-full">
            <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[16px]">
                🔍
            </span>

            <input
                value={searchText}
                onChange={(e) => onChangeSearchText(e.target.value)}
                placeholder="할 일 검색..."
                aria-label="할 일 검색"
                className="w-full rounded-[8px] border-[1px] border-[#E5E7EB] py-[12px] pl-[44px] pr-[16px] text-[14px] text-[#6B7280]
                            focus:text-[#6B7280]"
            />
        </div>
  
        <div className="flex gap-[12px]">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => onChangeFilterCategory(category)}
              aria-pressed={selectedFilterCategory === category}
              className={`rounded-[8px] px-[18px] py-[10px] ${
                selectedFilterCategory === category
                  ? filterCategoryStyles[category].selected
                  : filterCategoryStyles[category].unselected
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    );
  }