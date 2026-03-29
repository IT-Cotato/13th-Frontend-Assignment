import { FaCheck } from "react-icons/fa6";

export default function TodoCard({
    key,
    text,
    isChecked,
}: {
    key: number;
    text: string;
    isChecked: boolean;
}) {
    return (
        <>
            <li className={"todoCard " + (isChecked ? "checked" : "")}>
                <input type="checkbox" checked={isChecked} key={key} />
                <label>
                    <span className="check-icon">
                        {isChecked && <FaCheck color="white" size={14} />}
                    </span>
                    {isChecked ? <del>{text}</del> : text}
                </label>
            </li>
        </>
    );
}
