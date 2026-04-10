import checkIcon from "./resource/checked-icon.png";
import { useState, type Dispatch, type SetStateAction } from "react";
import type { TodoItem } from "./types";

export default function CheckButton({
    selectCardId,
    completed,
    setListState,
}: {
    selectCardId: number;
    setListState: Dispatch<SetStateAction<TodoItem[]>>;
    completed: true | false;
}) {
    const handleCheckbox = () => {
        setListState((prevList) =>
            prevList.map((item) =>
                item.id === selectCardId
                    ? { ...item, completed: !item.completed }
                    : item,
            ),
        );
    };
    return (
        <>
            <span className="check-icon" onClick={handleCheckbox}>
                {completed && (
                    <img src={checkIcon} alt="삭제" width={14} height={10} />
                )}
            </span>
        </>
    );
}
