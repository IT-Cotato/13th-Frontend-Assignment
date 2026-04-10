import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import { todoItems } from "./data";

export default function App() {
    // 투두리스트 상태 관리
    const [listState, setListState] = useState(todoItems);

    function handleDelete(id) {
        setListState((prevList) => prevList.filter((item) => item.id !== id));
    }

    return (
        <>
            <TodoHeader />
            <TodoInput listState={listState} setListState={setListState} />
            <TodoList
                listState={listState}
                setListState={setListState}
                onDelete={handleDelete}
            />
        </>
    );
}
