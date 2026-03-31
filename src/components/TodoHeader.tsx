type TodoHeaderProps = {
  icon: string;
  title: string;
};

function TodoHeader({ icon, title }: TodoHeaderProps) {
  return (
    <div className="flex self-stretch items-center gap-2 py-2.5">
      <span className="text-gray-800 text-2xl font-bold leading-9">{icon}</span>
      <h1 className="text-gray-800 text-2xl font-bold leading-9">{title}</h1>
    </div>
  );
}

export default TodoHeader;
