export default function TodoHeader({
  totalCount,
  completedCount,
  incompleteCount,
}: {
  totalCount: number;
  completedCount: number;
  incompleteCount: number;
}) {
  const title = "오늘의 할 일";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div className="Heading">
        <div className="icon">✅</div>
        <h1 className="title">{title}</h1>
      </div>
      <div className="counter-bar">
        <span>
          전체 <strong>{totalCount}</strong>개
        </span>
        <span>
          완료 <strong className="counter-completed">{completedCount}</strong>개
        </span>
        <span>
          미완료{" "}
          <strong className="counter-incomplete">{incompleteCount}</strong>개
        </span>
      </div>
    </div>
  );
}
