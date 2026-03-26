import { useState } from "react";
import checkIcon from "../assets/Check.svg";

interface TodoCardProps {
  content: string;
  checked?: boolean;
}

export default function TodoCard({ content, checked = false }: TodoCardProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li 
      onClick={toggleCheck}
      className="flex p-[16px] gap-[10px] items-center self-stretch bg-card rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]"
    >
      <div className={`w-6 h-6 flex items-center justify-center border-[2px] rounded-full transition-colors ${
        isChecked 
          ? 'bg-primary/40 border-primary/0' 
          : 'bg-white border-border'
      }`}>
        {isChecked && (
          <img src={checkIcon} alt="done" className="w-[14px] h-[10px]" />
        )}

      </div>
      <p className={`text-body leading-[21px] transition-all ${
        isChecked ? 'line-through text-gray-400 opacity-60' : 'text-gray-900'
      }`}
      >
        {content}
      </p>
    </li>
  )
}