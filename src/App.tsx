import "./css/App.css";
import TodoHeader from "./ui/TodoHeader";
import TodoInput from "./ui/TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";
import { todoItems } from "./data";
import TodoCounter from "./ui/TodoCounter";
import CategorySelector from "./ui/CategorySelector";
import type { TodoItem } from "./types";

export default function App() {
    // 투두리스트 상태 관리
    const [listState, setListState] = useState(todoItems);

    // 카테고리 추가 상태 관리
    const categories = ["study", "exercise", "personal", "work"];
    const categoryLabels: Record<string, string> = {
        study: "공부",
        exercise: "운동",
        personal: "개인",
        work: "업무",
    };
    const [selectedCategory, setSelectedCategory] = useState("study");

    // 카테고리 선택 이벤트 핸들러
    function handleCategorySelect(category: string) {
        setSelectedCategory(category);
    }

    // 체크 토글 이벤트 핸들러
    function handleToggle(id: number) {
        setListState((prevList) =>
            prevList.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        );
    }

    // 삭제 버튼 이벤트 핸들러
    function handleDelete(id: number) {
        setListState((prevList) => prevList.filter((item) => item.id !== id));
    }

    // 수정 적용 핸들러
    function handleChangeTodo(nextTodo: TodoItem) {
        setListState((prevList) =>
            prevList.map((t) => {
                if (t.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return t;
                }
            }),
        );
    }
    // 투두 추가 이벤트 핸들러
    function handleAddTodo(inputText: string) {
        if (inputText == "") return;

        setListState((prevList) => {
            const newId =
                listState.length > 0
                    ? listState[listState.length - 1].id + 1
                    : 1;

            return [
                ...prevList,
                {
                    id: newId,
                    completed: false,
                    text: inputText,
                    category: selectedCategory,
                    categoryLabel: categoryLabels[selectedCategory],
                },
            ];
        });
    }

    // 투두 카운터 계산
    const totalCount = listState.length;
    const completedCount = listState.filter((item) => item.completed).length;
    const remainingCount = listState.filter((item) => !item.completed).length;

    return (
        <>
            <TodoHeader />
            <TodoCounter
                totalCount={totalCount}
                completedCount={completedCount}
                remainingCount={remainingCount}
            />
            <TodoInput onAdd={handleAddTodo} />
            <CategorySelector
                categories={categories}
                categoryLabels={categoryLabels}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
            />
            <TodoList
                listState={listState}
                onChange={handleChangeTodo}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </>
    );
}
