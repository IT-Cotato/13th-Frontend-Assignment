import './TodoCard.css';

type Props = {
  text: string;
};

function TodoCard({ text }: Props) {
  return <div className="card">{text}</div>;
}

export default TodoCard;