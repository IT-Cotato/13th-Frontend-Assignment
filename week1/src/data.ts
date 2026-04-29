import type { TodoItem } from "./types";

export const initialTodoItems: TodoItem[] = [
  { id: 1, text: "리액트 공식문서 읽기", checked: true, category: "study" },
  { id: 2, text: "알고리즘 문제 풀기", checked: true, category: "study" },
  { id: 3, text: "운동 30분 하기", checked: false, category: "exercise" },
  { id: 4, text: "프로젝트 회의 준비", checked: false, category: "work" },
  { id: 5, text: "장보기 하기", checked: false, category: "personal" },
];

export const focusPreviewItems: TodoItem[] = [
  { id: 101, text: "운동 30분 하기", checked: false, category: "exercise" },
  { id: 102, text: "프로젝트 회의 준비", checked: false, category: "work" },
];
