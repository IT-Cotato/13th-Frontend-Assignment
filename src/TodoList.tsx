import Empty from "./Empty";
import TodoCard from "./TodoCard";
import { todoItems } from "./data";

export default function TodoList({ listState }) {
    const todoItem = listState.map((todoItems) => (
        <TodoCard
            key={todoItems.id}
            id={todoItems.id}
            text={todoItems.text}
            completed={todoItems.completed}
        />
    ));
    if (todoItem.length === 0) {
        return <Empty />;
    }
    return (
        <>
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
