import "./App.css";

const checkIcon = "✅";
const title = "오늘의 할일";

export default function App() {
    return (
        <>
            <TodoHeader />
            <TodoList />
        </>
    );
}

export function TodoHeader() {
    return (
        <div id="title">
            <h1>
                <span>{checkIcon}</span>
                <span>{title}</span>
            </h1>
        </div>
    );
}

export function TodoList() {
    return (
        <div id="todoList">
            <TodoCard />
        </div>
    );
}

export function TodoCard() {
    const todoItems = [
        { id: 1, text: "리액트 공식문서 읽기" },
        { id: 2, text: "알고리즘 문제 풀기" },
        { id: 3, text: "운동 30분 하기" },
        { id: 4, text: "프로젝트 회의 준비" },
    ];

    const rendering = () => {
        const result = [];
        for (let i = 0; i < todoItems.length; i++) {
            result.push(
                <div key={todoItems[i].id} className="todoCard">
                    {todoItems[i].text}
                </div>,
            );
        }
        return result;
    };

    return <>{rendering()}</>;
}
