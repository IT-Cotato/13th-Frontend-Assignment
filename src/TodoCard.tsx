export default function TodoCard({text}: {text: string} ) {
    return(
        <div className="TodoCard">
            <div className="TodoCard-text">{text}</div>
        </div>
    )
}