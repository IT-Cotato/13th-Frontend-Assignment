export type TodoCategory = '공부' | '운동' | '개인' | '업무';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category: TodoCategory
};