import type Todo from "./todo";

export type TodoAction =
  | { type: "ADD"; payload: Omit<Todo, "id"> }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "TOGGLE"; payload: { id: number } }
  | { type: "EDIT_SAVE"; payload: { id: number; text: string } };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), ...action.payload }];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      );
    case "EDIT_SAVE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    default:
      return state;
  }
}
