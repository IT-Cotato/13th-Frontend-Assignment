import { useState } from "react";

export default function TodoInput({ listState, setListState }) {
    const [inputText, setInputText] = useState<string>("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    function handleAddTodo() {
        if (inputText == "") return;

        const newId = listState[listState.length - 1].id + 1;
        setListState((prevList) => [
            ...prevList,
            { id: newId, completed: false, text: inputText },
        ]);

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
                    onChange={onChange}
                    value={inputText}
                ></input>

                <button id="addButton" type="submit" onClick={handleAddTodo}>
                    <span className="buttonText">추가</span>
                </button>
            </form>
        </>
    );
}
