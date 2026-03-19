type TodoCardProps = {
  text: string;
  isLast?: boolean;
};

function TodoCard({ text, isLast }: TodoCardProps) {
  return (
    <div
      className={
        isLast
          ? "self-stretch flex-1 p-4 bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] inline-flex justify-start items-center gap-2.5"
          : "self-stretch p-4 bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] inline-flex justify-start items-center gap-2.5"
      }
    >
      <div className="text-gray-800 text-sm font-normal leading-5">{text}</div>
    </div>
  );
}

export default TodoCard;
