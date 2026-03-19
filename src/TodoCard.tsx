function TodoCard({ text }: { text: string }) {
  return (
    <div className="card">
      <div className="card-text">{text}</div>
    </div>
  );
}

export default TodoCard;