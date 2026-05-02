import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import type { TodoItem } from "../types";

export default function TodoCard({
    id,
    text,
    completed,
    category,
    onToggle,
    onDelete,
}: TodoItem & {
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}) {
    return (
        <>
            <li className={"todoCard " + (completed ? "checked" : "")}>
                <input
                    type="checkbox"
                    checked={completed}
                    id={String(id)}
                    readOnly
                />
                <CheckButton
                    completed={completed}
                    onToggle={() => onToggle(id)}
                    id={id}
                />
                <div className="labelContainer">
                    <label>{completed ? <del>{text}</del> : text}</label>
                    <span className="category">{category}</span>
                </div>
                <DeleteButton onDelete={() => onDelete(id)} />
            </li>
        </>
    );
}
