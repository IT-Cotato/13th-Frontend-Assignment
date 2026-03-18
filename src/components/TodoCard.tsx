import "./css/TodoCard.css"

export default function TodoCard({ todo }: { todo: string }) {

    return (
        <div className="todo-card">
          <p className="todo-card-text">{todo}</p>
        </div>
    )
}