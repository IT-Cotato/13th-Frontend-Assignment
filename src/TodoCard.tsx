import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";

export default function TodoCard({
    id,
    text,
    completed,
    onDelete,
}: {
    id: number;
    text: string;
    completed: boolean;
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
                <label>
                    <CheckButton completed={completed} />
                    {completed ? <del>{text}</del> : text}
                </label>
                <DeleteButton onDelete={() => onDelete(id)} />
            </li>
        </>
    );
}
