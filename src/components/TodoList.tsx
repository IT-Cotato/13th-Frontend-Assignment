import TodoCard from "./TodoCard";

type TodoListProps = {
  items: string[];
};

export default function TodoList({ items }: TodoListProps) {
  return (
    <div className="todo-list">
      {items.map((item, index) => (
        <TodoCard key={index} text={item} />
      ))}
    </div>
  );
}