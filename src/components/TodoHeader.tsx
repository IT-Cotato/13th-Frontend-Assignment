type TodoHeaderProps = {
  icon: string;
  title: string;
};

function TodoHeader({ icon, title }: TodoHeaderProps) {
  return (
    <div className="self-stretch py-2.5 flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch h-9 inline-flex justify-start items-center gap-2">
        <div className="w-8 h-9 flex items-center justify-start">
          <div className="text-gray-800 text-2xl font-bold leading-9">
            {icon}
          </div>
        </div>

        <div className="h-9 flex items-center justify-start">
          <div className="text-gray-800 text-2xl font-bold leading-9">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoHeader;
