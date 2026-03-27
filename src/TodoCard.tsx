export default function TodoCard({text, isCompleted}: {text: string; isCompleted: boolean}) {
    return(
        <div className="TodoCard">
            <div className="TodoCard-text">{text}</div>
        </div>
    )
}