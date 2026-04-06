import Empty from "./Empty";
import TodoCard from "./TodoCard";

export default function TodoList({ listState, onDelete }) {
    const todoItem = listState.map((todoItems) => (
        <TodoCard key={todoItems.id} {...todoItems} onDelete={onDelete} />
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
