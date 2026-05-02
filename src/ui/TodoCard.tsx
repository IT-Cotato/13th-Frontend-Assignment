import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import type { TodoItem } from "../types";
import { useState } from "react";

export default function TodoCard({
    id,
    text,
    completed,
    category,
    categoryLabel,
    onChange,
    onToggle,
    onDelete,
}: TodoItem & {
    onChange: (nextTodo: TodoItem) => void;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}) {
    // 수정 상태 관리
    const [isEditing, setIsEditing] = useState(false);
    const [beforeText, setBeforeText] = useState(text);

    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <div className="todoEditing">
                    <input
                        value={text}
                        onChange={(e) => {
                            onChange({
                                id,
                                completed,
                                category,
                                categoryLabel,
                                text: e.target.value,
                            });
                        }}
                    />
                    <button
                        onClick={() => {
                            setBeforeText(text);
                            setIsEditing(false);
                        }}
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setIsEditing(false);
                            onChange({
                                id,
                                completed,
                                category,
                                categoryLabel,
                                text: beforeText,
                            });
                        }}
                    >
                        Cancle
                    </button>
                </div>
                <span className={"todoItemCategory " + category}>
                    {categoryLabel}
                </span>
            </>
        );
    } else {
        todoContent = (
            <>
                <div className="labelContainer">
                    <label>{completed ? <del>{text}</del> : text}</label>
                    <span className={"todoItemCategory " + category}>
                        {categoryLabel}
                    </span>
                </div>
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <DeleteButton onDelete={() => onDelete(id)} />
            </>
        );
    }

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
                {todoContent}
            </li>
        </>
    );
}
