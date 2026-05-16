type TodoCounterProps = {
  totalCount: number;
  completedCount: number;
  inCompleteCount: number;
};

function TodoCounter({
  totalCount,
  completedCount,
  inCompleteCount,
}: TodoCounterProps) {
  return (
    <div className="flex h-11 w-full items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0px_1px_3px_rgba(0,0,0,0.10)]">
      <div className="text-sm leading-[21px] text-gray-500">
        전체 <span className="font-semibold text-gray-800">{totalCount}</span>개
      </div>

      <div className="text-sm leading-[21px] text-gray-500">
        완료{" "}
        <span className="font-semibold text-green-500">{completedCount}</span>개
      </div>

      <div className="text-sm leading-[21px] text-gray-500">
        미완료{" "}
        <span className="font-semibold text-blue-500">{inCompleteCount}</span>개
      </div>
    </div>
  );
}

export default TodoCounter;
