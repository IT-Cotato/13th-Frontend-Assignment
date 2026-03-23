interface TodoCardProps{
    task: string;
}

export default function TodoCard({task}:TodoCardProps){
    return (
        <div className="todo-card">
            {task}
        </div>
    )
}