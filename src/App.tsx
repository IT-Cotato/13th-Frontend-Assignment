import "./css/App.css";
import TodoHeader from "./ui/TodoHeader";
import TodoInput from "./ui/TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import { todoItems } from "./data";
import TodoCounter from "./ui/TodoCounter";

export default function App() {
    // 투두리스트 상태 관리
    const [listState, setListState] = useState(todoItems);

    // 체크 토글 이벤트 핸들러
    function handleToggle(id: number) {
        setListState((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        );
    }

    // 삭제 버튼 이벤트 핸들러
    function handleDelete(id: number) {
        setListState((prevList) => prevList.filter((item) => item.id !== id));
    }

    // 투두 카운터 계산
    const totalCount = listState.length;
    const completedCount = listState.filter((item) => item.completed).length;
    const remainingCount = listState.filter((item) => !item.completed).length;

    return (
        <>
            <TodoHeader />
            <TodoCounter
                totalCount={totalCount}
                completedCount={completedCount}
                remainingCount={remainingCount}
            />
            <TodoInput listState={listState} setListState={setListState} />
            <TodoList
                listState={listState}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </>
    );
}
