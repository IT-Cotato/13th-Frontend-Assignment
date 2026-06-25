import type { Todo, Category } from '../types/todo';

export type TodoAction =
  | { type: 'ADD'; payload: { id: string; task: string; category: Category } }
  | { type: 'TOGGLE'; payload: { id: string } }
  | { type: 'DELETE'; payload: { id: string } }
  | { type: 'UPDATE'; payload: { id: string; task: string } };

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          isCompleted: false,
          category: action.payload.category,
        },
      ];
    case 'TOGGLE':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload.id);
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, task: action.payload.task }
          : item
      );
  }
}
