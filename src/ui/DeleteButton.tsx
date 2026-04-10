import type { Dispatch, SetStateAction } from "react";
import trashIcon from "../resource/trashcan-icon.png";
import type { TodoItem } from "../types";

export default function DeleteButton({
    selectCardId,
    setListState,
}: {
    selectCardId: number;
    setListState: Dispatch<SetStateAction<TodoItem[]>>;
}) {
    function handleDelete(id: number) {
        setListState((prevList) => prevList.filter((item) => item.id !== id));
    }

    return (
        <>
            <button
                id="delete-button"
                onClick={() => handleDelete(selectCardId)}
            >
                <img src={trashIcon} alt="삭제" width={20} height={20} />
            </button>
        </>
    );
}
