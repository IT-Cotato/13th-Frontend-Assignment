import { useState } from "react";

export default function TodoInput({
    onAdd,
}: {
    onAdd: (inputText: string) => void;
}) {
    const [inputText, setInputText] = useState<string>("");

    const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputText === "") return;
        onAdd(inputText.trim());
        setInputText("");
    }

    return (
        <>
            <form id="todo-input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    onChange={onInput}
                    value={inputText}
                ></input>

                <button id="addButton" type="submit">
                    <span className="buttonText">추가</span>
                </button>

                <input type="checkbox"></input>
            </form>
        </>
    );
}
