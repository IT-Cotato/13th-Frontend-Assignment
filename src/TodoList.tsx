import Empty from "./ui/Empty";
import TodoCard from "./ui/TodoCard";
import type { TodoItem } from "./types";

export default function TodoList({
    listState,
    filteredList,
    onChange,
    onToggle,
    onDelete,
}: {
    listState: TodoItem[];
    filteredList: TodoItem[];
    onChange: (nextTodo: TodoItem) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}) {
    const todoItem = filteredList.map((todoItem) => (
        <TodoCard
            key={todoItem.id}
            {...todoItem}
            onChange={onChange}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    ));

    return (
        <>
            {listState.length === 0 && <Empty />}
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
