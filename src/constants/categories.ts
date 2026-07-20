import type { TodoCategory } from "../types/todo";

export type FilterCategory = "전체" | TodoCategory;

export const BASE_CATEGORY_BUTTON_CLASS =
  "flex h-10 items-center justify-center rounded-lg px-4 text-sm font-medium leading-5 outline outline-2 outline-offset-[-2px]";

export const CATEGORY_OPTIONS = [
  {
    value: "공부",
    label: "공부",
    selectedClass: "bg-blue-500 text-white outline-blue-500",
    defaultClass: "bg-white text-blue-500 outline-blue-500",
    tagClass: "bg-blue-500/10 text-blue-500",
  },
  {
    value: "운동",
    label: "운동",
    selectedClass: "bg-green-500 text-white outline-green-500",
    defaultClass: "bg-white text-green-500 outline-green-500",
    tagClass: "bg-green-500/10 text-green-500",
  },
  {
    value: "개인",
    label: "개인",
    selectedClass: "bg-purple-500 text-white outline-purple-500",
    defaultClass: "bg-white text-purple-500 outline-purple-500",
    tagClass: "bg-purple-500/10 text-purple-500",
  },
  {
    value: "업무",
    label: "업무",
    selectedClass: "bg-amber-500 text-white outline-amber-500",
    defaultClass: "bg-white text-amber-500 outline-amber-500",
    tagClass: "bg-amber-500/10 text-amber-500",
  },
] satisfies {
  value: TodoCategory;
  label: string;
  selectedClass: string;
  defaultClass: string;
  tagClass: string;
}[];

export const FILTER_OPTIONS = [
  {
    value: "전체",
    label: "전체",
    selectedClass: "bg-gray-800 text-white outline-gray-800",
    defaultClass: "bg-white text-gray-800 outline-gray-800",
  },
  ...CATEGORY_OPTIONS.map(({ value, label, selectedClass, defaultClass }) => ({
    value,
    label,
    selectedClass,
    defaultClass,
  })),
] satisfies {
  value: FilterCategory;
  label: string;
  selectedClass: string;
  defaultClass: string;
}[];
