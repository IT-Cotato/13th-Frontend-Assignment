export type Category = '공부' | '운동' | '개인' | '업무';

export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
  category: Category;
}
