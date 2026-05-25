export type TodoCategory =
  "공부" | "운동" | "개인" | "업무";

export type FilterCategory =
  TodoCategory | "전체";
  
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: TodoCategory;
}