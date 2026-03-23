type TodoHeaderProps = {
  icon: string;
  title: string;
};

function TodoHeader({ icon, title }: TodoHeaderProps) {
  return (
    <div className="self-stretch py-2.5">
      <div className="flex h-9 items-center gap-2">
        <span className="text-gray-800 text-2xl font-bold leading-9">
          {icon}
        </span>
        <h1 className="text-gray-800 text-2xl font-bold leading-9">{title}</h1>
      </div>
    </div>
  );
}

export default TodoHeader;
