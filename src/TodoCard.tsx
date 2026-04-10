import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import type { TodoItem } from "./types";

export default function TodoCard({
    id,
    text,
    completed,
    onDelete,
}: TodoItem & { onDelete: (id: number) => void }) {
    return (
        <>
            <li className={"todoCard " + (completed ? "checked" : "")}>
                <input
                    type="checkbox"
                    checked={completed}
                    id={String(id)}
                    readOnly
                />
                <label>
                    <CheckButton completed={completed} />
                    {completed ? <del>{text}</del> : text}
                </label>
                <DeleteButton onDelete={() => onDelete(id)} />
            </li>
        </>
    );
}
