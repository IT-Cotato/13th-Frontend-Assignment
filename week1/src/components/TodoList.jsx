import TodoCard from "./TodoCard.jsx";

export default function TodoList({ items }) {
  return (
    <ul className="todo-list">
      {items.map((item) => (
        <li key={item.id}>
          <TodoCard text={item.text} />
        </li>
      ))}
    </ul>
  );
}
