import TodoCard from "./TodoCard";

type TodoListProps = {
  todos: string[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="self-stretch h-64 list-none m-0 flex flex-col justify-start items-start gap-4 p-0">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="self-stretch flex-1 flex flex-col justify-start items-start"
        >
          <TodoCard text={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
