import '../css/TodoCard.css';

type Props = {
  text: string;
};

export default function TodoCard({text}: Props){
  return <div className="card">{text}</div>
}