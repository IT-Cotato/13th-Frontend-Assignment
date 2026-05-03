export default interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
  category: "공부" | "운동" | "개인" | "업무";
}
