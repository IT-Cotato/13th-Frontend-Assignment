import '../css/TodoHeader.css';

type Props = {
  title: string;
};

export default function TodoHeader({ title }: Props) {
  return(
    <div className="title">
      <span className="title-check">✅</span>
      <h1 className="title-text">{title}</h1>
    </div>
  )
}