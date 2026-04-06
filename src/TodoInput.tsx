import { useState } from "react";

export default function TodoInput({ listState, setListState }) {
    const [inputText, setInputText] = useState<string>("");

    const onChange = (event) => {
        setInputText(event.target.value);
    };

    function handleAddTodo() {
        const newId = listState[listState.length - 1].id + 1;

        setListState((prevList) => [
            ...prevList,
            { id: newId, completed: false, text: inputText },
        ]);
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="할 일을 입력하세요"
                    onChange={onChange}
                ></input>
                <button type="submit" onClick={handleAddTodo}>
                    추가
                </button>
            </form>
        </>
    );
}
