// 아이콘 라이브러리
import { FaCheck } from "react-icons/fa6";
import DeleteButton from "./DeleteButton";

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
                    <span className="check-icon">
                        {completed && <FaCheck color="white" size={14} />}
                    </span>
                    {completed ? <del>{text}</del> : text}
                </label>
                <DeleteButton onDelete={() => onDelete(id)} />
            </li>
        </>
    );
}
