type Props = {
  title: string;
};

function TodoHeader({ title }: Props) {
  return (
    <div className="title">
      <span className="title-icon">✅</span>
      <h1 className="title-text">{title}</h1>
    </div>
  );
}

export default TodoHeader;