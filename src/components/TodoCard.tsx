type TodoCardProps = {
  text: string;
};

function TodoCard({ text }: TodoCardProps) {
  return (
    <div className="self-stretch p-4 bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] inline-flex justify-start items-center gap-2.5">
      <div className="text-gray-800 text-sm font-normal leading-5">{text}</div>
    </div>
  );
}

export default TodoCard;
