import TodoCard from "./TodoCard";
import "./css/TodoList.css"

export default function TodoList() {
    return (
        <div className="todo-list">
            <TodoCard todo="리액트 공식문서 읽기" />
            <TodoCard todo="알고리즘 문제 풀기" />
            <TodoCard todo="운동 30분 하기" />
            <TodoCard todo="프로젝트 회의 준비" />
        </div>
    )
}