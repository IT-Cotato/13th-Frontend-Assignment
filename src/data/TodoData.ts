import type { Category } from '../types/todo';

export type Todo = {
    id: number;
    todo: string;
    isCompleted: boolean;
    category: Category;
};

export const todoData: Todo[] = [
    {
        id: 0,
        todo: '리액트 공식문서 읽기',
        isCompleted: true,
        category: '공부'
    },
    {
        id: 1,
        todo: '알고리즘 문제 풀기',
        isCompleted: true,
        category: '공부'
    },
    {
        id:2,
        todo: '운동 30분 하기',
        isCompleted: false,
        category: '운동'
    },
    {
        id: 3,
        todo: '프로젝트 회의 준비',
        isCompleted: false,
        category: '업무'
    },
    {
        id: 4,
        todo: '장보기 하기',
        isCompleted: false,
        category: '개인'
    }
];
