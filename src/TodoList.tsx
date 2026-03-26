import TodoCard from "./TodoCard";

export default function TodoList() {
    /*
    const todoItems = [
        { text: "리액트 공식문서 읽기" },
        { text: "알고리즘 문제 풀기" },
        { text: "운동 30분 하기" },
        { text: "프로젝트 회의 준비" },
    ];
*/
    /* 리스트 목록을 돌며 여러 카드를 렌더링하도록 수정 */
    return (
        <ul id="todoList" className="control-container">
            <TodoCard id="1" text="리액트 공식문서 읽기" isChecked={true} />
            <TodoCard id="2" text="알고리즘 문제 풀기" isChecked={true} />
            <TodoCard id="3" text="운동 30분 하기" isChecked={false} />
            <TodoCard id="4" text="프로젝트 회의 준비" isChecked={false} />
        </ul>
    );
}
