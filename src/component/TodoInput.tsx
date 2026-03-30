import { useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return(
    <div className="flex w-[640px] h-[46.6px] items-center justify-between gap-3">
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="flex-1 h-[46.6px] px-3 py-4 text-body items-center border-[0.8px] rounded-[8px] border-border outline-none transition-all
          focus:border-2 focus:border-primary
          focus:ring-4 focus:ring-primary
          focus:bg-transparent
        "
      />
      <button 
        onClick={handleAdd}
        className="flex w-[72.2px] h-full px-3 py-3 items-center justify-center bg-primary rounded-[8px] text-body text-white leading-[21px]"
      >
        추가
      </button>

    </div>
  )

}