import Empty from "./Empty";
import TodoCard from "./TodoCard";

export default function TodoList({ listState, onDelete }) {
    if (listState.length === 0) {
        return <Empty />;
    }
    const todoItem = listState.map((todoItems) => (
        <TodoCard key={todoItems.id} {...todoItems} onDelete={onDelete} />
    ));
    return (
        <>
            <ul id="todoList">{todoItem}</ul>
        </>
    );
}
