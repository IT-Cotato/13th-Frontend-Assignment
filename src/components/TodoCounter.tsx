export default function TodoCounter({
  totalCount,
  completedCount,
  incompletedCount,
}: {
  totalCount: number;
  completedCount: number;
  incompletedCount: number;
}) {
  return (
    <>
      <div className="counterContainer">
        <div className="todoStatusItem">전체 <span className="todoStatusTotal">{totalCount}</span>개</div>
        <div className="todoStatusItem">완료 <span className="todoStatusCompleted">{completedCount}</span>개</div>
        <div className="todoStatusItem">미완료 <span className="todoStatusUncompleted">{incompletedCount}</span>개</div>
      </div>
    </>
  );
}
