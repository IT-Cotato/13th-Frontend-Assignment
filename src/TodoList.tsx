import Empty from "./ui/Empty";
import TodoCard from "./ui/TodoCard";
import type { TodoItem } from "./types";

export default function TodoList({
    listState,
    onChange,
    onToggle,
    onDelete,
}: {
    listState: TodoItem[];
    onChange: (nextTodo: string) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}) {
    if (listState.length === 0) {
        return <Empty />;
    }
    const todoItem = listState.map((todoItem) => (
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
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
