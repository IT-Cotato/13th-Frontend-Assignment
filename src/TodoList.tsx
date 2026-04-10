import type { Dispatch, SetStateAction } from "react";
import Empty from "./Empty";
import TodoCard from "./TodoCard";
import type { TodoItem } from "./types";

export default function TodoList({
    listState,
    setListState,
    onDelete,
}: {
    listState: TodoItem[];
    setListState: Dispatch<SetStateAction<TodoItem[]>>;
    onDelete: (id: number) => void;
}) {
    if (listState.length === 0) {
        return <Empty />;
    }
    const todoItem = listState.map((todoItems) => (
        <TodoCard
            key={todoItems.id}
            {...todoItems}
            setListState={setListState}
            onDelete={onDelete}
        />
    ));
    return (
        <>
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
