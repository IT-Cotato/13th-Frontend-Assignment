import type { Todo, TodoCategory } from '../types/todo';

export type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: {
        text: string;
        category: TodoCategory;
      };
    }
  | {
      type: 'TOGGLE_TODO';
      payload: {
        id: number;
      };
    }
  | {
      type: 'EDIT_TODO';
      payload: {
        id: number;
        text: string;
      };
    }
  | {
      type: 'DELETE_TODO';
      payload: {
        id: number;
      };
    };

export const initialTodos: Todo[] = [
  { id: 1, text: '리액트 공식문서 읽기', completed: true, category: '공부' },
  { id: 2, text: '알고리즘 문제 풀기', completed: true, category: '공부' },
  { id: 3, text: '운동 30분 하기', completed: false, category: '운동' },
  { id: 4, text: '프로젝트 회의 준비', completed: false, category: '업무' },
  { id: 5, text: '장보기 하기', completed: false, category: '개인' },
];

export function todoReducer(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          category: action.payload.category,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case 'EDIT_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}