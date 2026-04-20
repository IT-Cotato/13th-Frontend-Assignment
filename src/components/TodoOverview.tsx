import type { Todo } from "../data/TodoData";

export default function TodoOverview({todos} : {todos: Todo[]}) {
    const totalCount = todos.length;
    const completedCount = todos.filter((todo) => todo.isCompleted).length;
    const incompletedCount = todos.filter((todo) => !todo.isCompleted).length;

    return (
        <div className="flex w-full items-center justify-between gap-[12px] px-[16px] py-[12px] rounded-[12px] bg-white shadow-sm">
            <p className="text-[14px] text-[#6B7280]">
                전체 <span className="text-[#1F2937]">{totalCount}</span>개
                완료 <span className="text-[#22C55E]">{completedCount}</span>개
                미완료 <span className="text-[#3B82F6]">{incompletedCount}</span>개
            </p>
        </div>
    )

} 