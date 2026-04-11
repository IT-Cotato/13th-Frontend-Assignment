import { useState } from "react";

export default function TodoInput({
    onAdd,
}: {
    onAdd: (inputText: string) => void;
}) {
    const [inputText, setInputText] = useState<string>("");

    const onInput = (event) => {
        setInputText(event.target.value);
    };

    function handleSubmit() {
        if (inputText === "") return;
        onAdd(inputText);
        setInputText("");
    }

    return (
        <>
            <form
                id="todo-input-form"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    onChange={onInput}
                    value={inputText}
                ></input>

                <button id="addButton" type="submit" onClick={handleSubmit}>
                    <span className="buttonText">추가</span>
                </button>
            </form>
        </>
    );
}
