export default function TodoEmptyState({
  icon,
  message,
}: {
  icon: string;
  message: string;
}) {
  return (
    <>
      <div className="empty-state">
        <span className="empty-icon">{icon}</span>
        <p className="empty-text">{message}</p>
      </div>
    </>
  );
}
