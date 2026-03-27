import CheckIcon from "./CheckIcon";

export default function TodoCard({text, isCompleted}: {text: string; isCompleted: boolean}) {
    return(
        <div className="TodoCard">
            <div className={`TodoCard-checkbox ${isCompleted ? "checked" : ""}`}>
                {isCompleted && <CheckIcon />}
            </div>
            <div className={`TodoCard-text ${isCompleted ? 'completed' : ''}`}> 
                {text}  
            </div>
        </div>
    )
}