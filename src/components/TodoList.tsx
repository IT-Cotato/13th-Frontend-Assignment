import TodoCard from "./TodoCard";

type TodoListProps = {
  todos: string[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <div className="self-stretch h-64 flex flex-col justify-start items-start gap-4">
      <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
        {todos.map((todo, index) => (
          <TodoCard key={index} text={todo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
