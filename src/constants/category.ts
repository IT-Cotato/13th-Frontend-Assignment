export type CategoryType = "공부" | "운동" | "개인" | "업무";

export const CATEGORY_STYLES: Record<CategoryType, {filter: string; tag: string; active: string}> = {
  공부: {
    filter: "bg-white border-primary text-primary",
    tag: "bg-primary/12.5 text-primary",
    active: "bg-primary border-primary text-white",
  },
  운동: {
    filter: "bg-white border-success text-success",
    tag: "bg-success/12.5 text-success",
    active: "bg-success border-success text-white",
  },
  개인: {
    filter: "bg-white border-purple text-purple",
    tag: "bg-purple/12.5 text-purple",
    active: "bg-purple border-purple text-white",
  },
  업무: {
    filter: " bg-white border-warning text-warning",
    tag: "bg-warning/12.5 text-warning",
    active: "bg-warning border-warning text-white",
  },
} as const