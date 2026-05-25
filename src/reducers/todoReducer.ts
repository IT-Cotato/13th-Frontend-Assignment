import type { Todo, TodoCategory } from "../types/todo.types";

type TodoAction =
  | {
      type: "ADD";
      payload: {
        text: string;
        category: TodoCategory;
      };
    }
  | {
      type: "DELETE";
      payload: { id: number };
    }
  | {
      type: "TOGGLE";
      payload: { id: number };
    }
  | {
      type: "UPDATE";
      payload: {
        id: number;
        text: string;
      };
    };

export function todoReducer(
  state: Todo[],
  action: TodoAction
): Todo[] {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          category: action.payload.category,
        },
      ];

    case "DELETE":
      return state.filter(
        (todo) => todo.id !== action.payload.id
      );

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );

    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
            }
          : todo
      );

    default:
      return state;
  }
}

type EditState = {
  editingId: number | null;
  editText: string;
};

type EditAction =
  | {
      type: "START_EDIT";
      payload: {
        id: number;
        text: string;
      };
    }
  | {
      type: "CHANGE_TEXT";
      payload: {
        text: string;
      };
    }
  | {
      type: "CANCEL_EDIT";
    };

export const editInitialState: EditState = {
  editingId: null,
  editText: "",
};

export function editReducer(
  state: EditState,
  action: EditAction
): EditState {
  switch (action.type) {
    case "START_EDIT":
      return {
        editingId: action.payload.id,
        editText: action.payload.text,
      };

    case "CHANGE_TEXT":
      return {
        ...state,
        editText: action.payload.text,
      };

    case "CANCEL_EDIT":
      return {
        editingId: null,
        editText: "",
      };

    default:
      return state;
  }
}