import { initialTodos } from "../data/initialTodos";
import type { Todo, TodoCategory } from "../types/todo";

export type TodoAction =
  | { type: "ADD_TODO"; payload: { text: string; category: TodoCategory } }
  | { type: "UPDATE_TODO"; payload: { id: number; text: string } }
  | { type: "DELETE_TODO"; payload: { id: number } }
  | { type: "COMPLETE_TODO"; payload: { id: number } };

export default function todoReducer(
  state: Todo[] = initialTodos,
  action: TodoAction,
):Todo[] {
  switch (action.type) {
    case "ADD_TODO": {
      const { text, category } = action.payload;
      const newIndex = state.length > 0 ? state[state.length - 1].id + 1 : 0;

      return [
        ...state,
        { id: newIndex, text: text, completed: false, category: category },
      ];
    }

    case "UPDATE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    }

    case "DELETE_TODO": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }

    case "COMPLETE_TODO": {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    }

    default:
      return state;
  }
}
