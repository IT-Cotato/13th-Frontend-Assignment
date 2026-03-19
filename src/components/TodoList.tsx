import TodoCard from "./ToDoCard";

type Props = {
  todos: string[];
};

function TodoList({ todos }: Props) {
  return (
    <div className="card-list">
      {todos.map((todo, idx) => (
        <TodoCard key={idx} text={todo} />
      ))}
    </div>
  );
}

export default TodoList;