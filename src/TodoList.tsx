import Empty from "./ui/Empty";
import TodoCard from "./ui/TodoCard";
import type { TodoItem } from "./types";

export default function TodoList({
    totalCount,
    filteredList,
    onChange,
    onToggle,
    onDelete,
}: {
    totalCount: number;
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

    if (totalCount === 0) {
        return <Empty type="total" />;
    }

    return (
        <>
            <ul id="todoList">
                {filteredList.length > 0 ? todoItem : <Empty type="search" />}
            </ul>
        </>
    );
}
