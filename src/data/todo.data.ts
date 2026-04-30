import type { TodoItem } from '../types/todo.types';

export const INITIAL_TODOS: TodoItem[] = [
  { id: 1, text: '리액트 공식문서 읽기', isChecked: true, category: '공부' },
  { id: 2, text: '알고리즘 문제 풀기', isChecked: true, category: '공부' },
  { id: 3, text: '운동 30분 하기', isChecked: false, category: '운동' },
  { id: 4, text: '프로젝트 회의 준비', isChecked: false, category: '업무' },
  { id: 5, text: '장보기 하기', isChecked: false, category: '개인' },
];
