export default function TodoHeader() {
  const title = "오늘의 할 일"
  return (
    <div className="Heading">
        <div className="icon">✅</div>
        <h1 className="title">{title}</h1>
    </div>
  )
}