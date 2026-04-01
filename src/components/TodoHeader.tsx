type TodoHeaderProps = {
  icon: string;
  title: string;
};

function TodoHeader({ icon, title }: TodoHeaderProps) {
  return (
    <div className="flex w-[640px] items-center gap-2">
      <span className="text-2xl font-bold leading-9 text-gray-800">{icon}</span>
      <h1 className="text-2xl font-bold leading-9 text-gray-800">{title}</h1>
    </div>
  );
}

export default TodoHeader;
