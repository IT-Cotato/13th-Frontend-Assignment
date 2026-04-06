// 아이콘 라이브러리
import { FaCheck } from "react-icons/fa6";

export default function TodoCard({
    id,
    text,
    completed,
}: {
    id: number;
    text: string;
    completed: boolean;
}) {
    return (
        <>
            {/* readOnly */}
            <li className={"todoCard " + (completed ? "checked" : "")}>
                <input type="checkbox" checked={completed} id={id} readOnly />
                <label>
                    <span className="check-icon">
                        {completed && <FaCheck color="white" size={14} />}
                    </span>
                    {completed ? <del>{text}</del> : text}
                </label>
                <button
                    onClick={() => {
                        alert("delete test");
                    }}
                >
                    🗑
                </button>
            </li>
        </>
    );
}

// export function DeleteButton() {
//     handleDelete = () => {};
//     return (
//         <>
//             <button onClick={handleDelete}>🗑</button>
//         </>
//     );
// }
