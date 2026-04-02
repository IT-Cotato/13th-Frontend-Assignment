import Empty from "./Empty";
import TodoCard from "./TodoCard";
import { todoItems } from "./data";

export default function TodoList() {
    const todoItem = todoItems.map((todoItems) => (
        <TodoCard
            id={todoItems.id}
            text={todoItems.text}
            isChecked={todoItems.isChecked}
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
