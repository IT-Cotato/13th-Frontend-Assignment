export type TodoCategory = "study" | "exercise" | "personal" | "work";

export interface TodoItem {
  id: number;
  text: string;
  checked: boolean;
  category: TodoCategory;
}
