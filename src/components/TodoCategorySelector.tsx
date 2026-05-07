import type { Category } from '../types/todo';

const categories: Category[] = ["공부", "운동", "개인", "업무"];

const categoryStyles: Record<Category, { selected: string; unselected: string }> = {
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

export default function TodoCategorySelector({
  selectedCategory,
  onChangeCategory,
}: {
  selectedCategory: Category;
  onChangeCategory: (category: Category) => void;
}) {
  return (
    <div className="flex gap-[12px]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChangeCategory(category)}
          aria-pressed={selectedCategory === category}
          className={`rounded-[8px] px-[18px] py-[10px] ${
            selectedCategory === category
              ? categoryStyles[category].selected
              : categoryStyles[category].unselected
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}