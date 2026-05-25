import { todoItems } from "./data";
import type { TodoItem } from "./types";

type State = {
    todos: TodoItem[];
    selectedCategory: string;
    filterCategory: string;
    searchText: string;
};

const initialState: State = {
    todos: todoItems,
    selectedCategory: "study",
    filterCategory: "all",
    searchText: "",
};

type Action =
    | {
          type: "ADD_TODO";
          inputText: string;
          selectedCategory: string;
          categoryLabels: Record<string, string>;
      }
    | { type: "TOGGLE_TODO"; id: number }
    | { type: "DELETE_TODO"; id: number }
    | { type: "CHANGE_TODO"; nextTodo: TodoItem }
    | { type: "SELECT_CATEGORY"; category: string }
    | { type: "FILTER_CATEGORY"; category: string }
    | { type: "SEARCH_TODO"; text: string };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_TODO": {
            const newId =
                state.todos.length > 0
                    ? state.todos[state.todos.length - 1].id + 1
                    : 1;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: newId,
                        completed: false,
                        text: action.inputText,
                        category: action.selectedCategory,
                        categoryLabel:
                            action.categoryLabels[action.selectedCategory],
                    },
                ],
            };
        }
        case "TOGGLE_TODO": {
            return {
                ...state,
                todos: state.todos.map((item) =>
                    item.id === action.id
                        ? { ...item, completed: !item.completed }
                        : item,
                ),
            };
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.id),
            };
        }
        case "CHANGE_TODO": {
            return {
                ...state,
                todos: state.todos.map((t) =>
                    t.id === action.nextTodo.id ? action.nextTodo : t,
                ),
            };
        }
        case "SELECT_CATEGORY": {
            return {
                ...state,
                selectedCategory: action.category,
            };
        }
        case "FILTER_CATEGORY":
            return { ...state, filterCategory: action.category };
        case "SEARCH_TODO":
            return { ...state, searchText: action.text };
    }
}

export { reducer, initialState };
export type { State, Action };
