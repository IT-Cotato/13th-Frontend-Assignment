import '../css/EmptyList.css';

type Props = {
  message?: string;
};

export default function EmptyList({ message = '아직 할 일이 없어요' }: Props) {
  return (
    <div className="empty-list">
      <span className="empty-icon">📋</span>
      <p className="empty-list-text">{message}</p>
    </div>
  );
}
