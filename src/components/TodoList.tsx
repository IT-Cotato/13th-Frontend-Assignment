import TodoCard from "./TodoCard";

type TodoListProps = {
  todo1: string;
  todo2: string;
  todo3: string;
  todo4: string;
};

function TodoList({ todo1, todo2, todo3, todo4 }: TodoListProps) {
  return (
    <div className="self-stretch h-64 flex flex-col justify-start items-start gap-4">
      <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-4">
        <TodoCard text={todo1} />
        <TodoCard text={todo2} />
        <TodoCard text={todo3} />
        <TodoCard text={todo4} />
      </div>
    </div>
  );
}

export default TodoList;
