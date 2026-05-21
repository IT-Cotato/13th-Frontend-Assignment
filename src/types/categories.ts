import type Todo from "./todo";

export type FilterCategory = "전체" | Todo["category"];

export const CATEGORIES: {
  value: Todo["category"];
  label: string;
  color: string;
  bg: string;
}[] = [
  {
    value: "공부",
    label: "공부",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.13)",
  },
  {
    value: "운동",
    label: "운동",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.13)",
  },
  {
    value: "개인",
    label: "개인",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.13)",
  },
  {
    value: "업무",
    label: "업무",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.13)",
  },
];

export const FILTER_CATEGORIES: FilterCategory[] = [
  "전체",
  ...CATEGORIES.map((c) => c.value),
];
