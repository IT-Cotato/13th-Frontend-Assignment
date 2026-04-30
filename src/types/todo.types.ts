export type TodoCategory = '공부' | '운동' | '개인' | '업무';

export type TodoItem = {
  id: number;
  text: string;
  isChecked: boolean;
  category: TodoCategory;
};
