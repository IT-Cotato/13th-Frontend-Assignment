import EmptyCircleIcon from "../icons/EmptyCircleIcon"
import CheckIcon from "../icons/CheckIcon"

function Item({todo, isCompleted, onToggle}: {todo: string; isCompleted: boolean; onToggle: () => void }) {
  return(
    <button onClick={onToggle} className="cursor-pointer">
      {isCompleted ? (
        <div className= "flex items-center gap-[12px] text-[#1F2937] opacity-50">
          <CheckIcon />
          <del>{todo}</del>
        </div>
      ) : (
        <div className= "flex items-center gap-[12px] text-[#1F2937]">
          <EmptyCircleIcon />
          <span>{todo}</span>
        </div>
      )}
  </button>
  )
}

export default function TodoCard({todo, isCompleted, onToggle }: {todo: string;isCompleted: boolean; onToggle: () => void}) {
  return (
    <li className="flex w-full items-center gap-[10px] p-4 rounded-[12px] bg-white shadow-sm">
      <div className="text-[14px] leading-[21px] text-[#1F2937]">
        <Item todo={todo} isCompleted={isCompleted} onToggle={onToggle} />
      </div>
    </li>
  )
}