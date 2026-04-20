export default function TodoCounter({
    totalCount,
    completedCount,
    remainingCount,
}: {
    totalCount: number;
    completedCount: number;
    remainingCount: number;
}) {
    return (
        <>
            <div id="TodoCounter-container">
                <span>
                    전체 <span className="total-count">{totalCount}</span>개
                </span>
                <span>
                    완료{" "}
                    <span className="completed-count">{completedCount}</span>개
                </span>
                <span>
                    미완료{" "}
                    <span className="remaining-count">{remainingCount}</span>개
                </span>
            </div>
        </>
    );
}
