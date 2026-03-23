import TodoCard from './TodoCard';

export default function TodoList() {
    return (
        <div className="todo-list">
            <TodoCard task="리액트 공식문서 읽기" />
            <TodoCard task="알고리즘 문제 풀기" />
            <TodoCard task="운동 30분 하기" />
            <TodoCard task="프로젝트 회의 준비" />
        </div>
    )

}