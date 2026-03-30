import checkIcon from "../assets/Check.svg";

interface TodoCardProps {
  content: string;
  checked?: boolean;
  onToggle?: () => void;
}

export default function TodoCard({ content, checked, onToggle }: TodoCardProps) {
  return (
    <li className="flex p-[16px] gap-[10px] items-center self-stretch bg-card rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">
      <div className="relative w-6 h-6 flex items-center justify-center">
        <input 
          type="checkbox"
          checked={checked} 
          onClick={onToggle}
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
    </li>
  )
}