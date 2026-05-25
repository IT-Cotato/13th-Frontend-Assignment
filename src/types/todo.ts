export type TodoCategory = "공부" | "운동" | "업무" | "개인";
export type FilterCategory = "전체" | TodoCategory;

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: TodoCategory;
}

export interface CategoryOption {
  value: TodoCategory;
  activeClass: string;
  inactiveClass: string;
  tagClass: string;
}