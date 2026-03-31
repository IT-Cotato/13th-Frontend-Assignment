import TodoCard from "./TodoCard";
import type { Todo } from "../data/TodoData";

export default function TodoList({todos} : {todos: Todo[] }) {
    const todoItems = todos.map( item =>
        <TodoCard key={item.id} todo = {item.todo} isCompleted = {item.isCompleted} />
    );

    return (
        <ul className="flex flex-col items-start gap-[16px] self-stretch">
            {todos.length === 0 ? (
                <li className="mx-auto flex w-full max-w-[640px] h-[233px] flex-col items-center justify-center gap-[12px] rounded-[12px] bg-white shadow-sm">
                    <span className="text-[48px] leading-[72px] text-center">📋</span>
                    <p className="text-[14px] text-[#6B7280]">아직 할 일이 없어요</p>
                </li>
            ) : (
                todoItems
            )}
        </ul>
    )
}