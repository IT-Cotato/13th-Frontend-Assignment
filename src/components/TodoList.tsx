import TodoCard from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoListProps = {
  items: Todo[];
};

export default function TodoList({ items }: TodoListProps) {
  if (items.length === 0) {
    return (
      <div className="todo-empty">
        <span className="todo-empty__icon">{"📋"}</span>
        <p className="todo-empty__text">{"아직 할 일이 없어요"}</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoCard key={item.id} text={item.text} done={item.done} />
      ))}
    </div>
  );
}