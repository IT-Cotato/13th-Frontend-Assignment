import { FaCheck } from "react-icons/fa6";

export default function TodoCard({
    id,
    text,
    isChecked,
}: {
    id: string;
    text: string;
    isChecked: boolean;
}) {
    return (
        <>
            <li className={"todoCard " + (isChecked ? "checked" : "")}>
                <input type="checkbox" checked={isChecked} id={id} />
                <label htmlFor={id}>
                    <span className="check-icon">
                        {isChecked && <FaCheck color="white" size={14} />}
                    </span>
                    {isChecked ? <del>{text}</del> : text}
                </label>
            </li>
        </>
    );
}
