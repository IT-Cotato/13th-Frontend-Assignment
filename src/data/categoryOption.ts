import type { CategoryOption } from "../types/todo";

export const CATEGORY_OPTIONS: CategoryOption[] = [
  {
    value: "공부",
    activeClass: "bg-study border-study text-white",
    inactiveClass: "text-study",
    tagClass: "bg-study/13 border-study text-study",
  },
  {
    value: "운동",
    activeClass: "bg-exercise border-exercise text-white",
    inactiveClass: "text-exercise",
    tagClass: "bg-exercise/13 border-exercise text-exercise",
  },
  {
    value: "업무",
    activeClass: "bg-work border-work text-white",
    inactiveClass: "text-work",
    tagClass: "bg-work/13 border-work text-work",
  },
  {
    value: "개인",
    activeClass: "bg-personal border-personal text-white",
    inactiveClass: "text-personal",
    tagClass: "bg-personal/13 border-personal text-personal",
  },
];
