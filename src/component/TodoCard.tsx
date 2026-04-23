import checkIcon from "../assets/Check.svg";

interface TodoCardProps {
  content: string;
  checked?: boolean;
  onToggle?: () => void;
  onDelete?: () => void;
}

export default function TodoCard({ content, checked, onToggle, onDelete }: TodoCardProps) {
  return (
    <div className="flex p-4 items-center justify-between self-stretch bg-card rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">

      <div className="flex gap-[10px] items-center">
        <div className="relative w-6 h-6 flex items-center justify-center">
          <input 
            type="checkbox"
            checked={checked} 
            onChange={onToggle}
            className={`appearance-none w-6 h-6 border-[2px] rounded-full transition-colors 
              ${ checked ? 'bg-primary/40 border-transparent' : 'bg-white border-border'}
            `}
          />
          {checked && (
            <img src={checkIcon} alt="done" className="absolute w-[14px] h-[10px] pointer-events-none" />
          )}
        </div>

        <p className={`text-body leading-[21px] transition-all ${
          checked ? 'line-through text-gray-400 opacity-60' : 'text-gray-900'
        }`}
        >
          {content}
        </p>
      </div>
      <button 
        onClick={onDelete}
        aria-label="할 일 삭제"
        className="w-10 h-10 flex items-center justify-center rounded-[8px] text-[20px] leading-[30px]"
      >
        🗑️
      </button>
    </div>
  )
}