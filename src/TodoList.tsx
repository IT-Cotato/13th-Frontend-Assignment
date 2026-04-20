import Empty from "./ui/Empty";
import TodoCard from "./ui/TodoCard";
import type { TodoItem } from "./types";

export default function TodoList({
    listState,
    onToggle,
    onDelete,
}: {
    listState: TodoItem[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}) {
    if (listState.length === 0) {
        return <Empty />;
    }
    const todoItem = listState.map((todoItems) => (
        <TodoCard
            key={todoItems.id}
            {...todoItems}
            onToggle={onToggle}
            onDelete={onDelete}
        />
    ));

    return (
        <>
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
