import Empty from "./Empty";
import TodoCard from "./TodoCard";
import { todoItems } from "./data";

export default function TodoList() {
    const cardsList = todoItems.map((todoItems) => (
        <TodoCard
            key={todoItems.key}
            text={todoItems.text}
            isChecked={todoItems.isChecked}
        />
    ));
    if (cardsList.length === 0) {
        return <Empty />;
    }
    return (
        <>
            <ul id="todoList" className="control-container">
                {cardsList}
            </ul>
        </>
    );
}
