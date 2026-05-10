import DeleteButton from "./DeleteButton";
import CheckButton from "./CheckButton";
import type { TodoItem } from "../types";
import { useState } from "react";
import EditButton from "./EditButton";

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
    const [editingText, setEditingText] = useState(text);

    let todoContent;

    if (isEditing) {
        todoContent = (
            <>
                <div className="todo-input-container">
                    <input
                        className="todo-input-editing"
                        value={editingText}
                        onChange={(e) => {
                            setEditingText(e.target.value);
                        }}
                    />
                    <span className={"todoItemCategory " + category}>
                        {categoryLabel}
                    </span>
                </div>
                <div className="editing-button-area">
                    <button
                        id="save-button"
                        onClick={() => {
                            onChange({
                                id,
                                completed,
                                category,
                                categoryLabel,
                                text: editingText,
                            });
                            setIsEditing(false);
                        }}
                    >
                        저장
                    </button>
                    <button
                        id="cancle-button"
                        onClick={() => {
                            setIsEditing(false);
                            setEditingText(text);
                        }}
                    >
                        취소
                    </button>
                </div>
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
                <EditButton onEdit={() => setIsEditing(true)} />
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
