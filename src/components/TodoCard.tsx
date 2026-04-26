import EmptyCircleIcon from "../icons/EmptyCircleIcon"
import CheckIcon from "../icons/CheckIcon"


function Item({todo, isCompleted, onToggle}: {todo: string; isCompleted: boolean; onToggle: () => void }) {
  return(
    <label className="flex items-center gap-[12px] cursor-pointer">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className="sr-only"
      />

      <div className={`flex items-center gap-[12px] text-[#1F2937] ${isCompleted ? "opacity-50" : ""}`}>
        {isCompleted ? <CheckIcon /> : <EmptyCircleIcon />}
        {isCompleted ? <del>{todo}</del> : <span>{todo}</span>}
      </div>
  </label>
  )
}

export default function TodoCard({todo, isCompleted, onToggle, onDelete }: {todo: string;isCompleted: boolean; onToggle: () => void; onDelete: () => void;}) {
  return (
    <li className="flex w-full items-center justify-between gap-[10px] p-4 rounded-[12px] bg-white shadow-sm">
      <div className="text-[14px] leading-[21px] text-[#1F2937]">
        <Item 
          todo={todo} 
          isCompleted={isCompleted} 
          onToggle={onToggle} 
        />
      </div>
      <button 
        onClick={onDelete} 
        className="cursor-pointer text-[20px] gap-[12px]"
        aria-label="할 일 삭제"
      >
      🗑
      </button>
    </li>
  )
}