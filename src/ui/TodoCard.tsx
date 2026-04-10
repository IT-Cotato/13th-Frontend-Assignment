import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import type { TodoItem } from "../types";
import type { Dispatch, SetStateAction } from "react";

export default function TodoCard({
    id,
    text,
    completed,
    setListState,
}: TodoItem & {
    setListState: Dispatch<SetStateAction<TodoItem[]>>;
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
                    <CheckButton
                        selectCardId={id}
                        setListState={setListState}
                        completed={completed}
                    />
                    {completed ? <del>{text}</del> : text}
                </label>
                <DeleteButton selectCardId={id} setListState={setListState} />
            </li>
        </>
    );
}
