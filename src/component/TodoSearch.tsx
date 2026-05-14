interface TodoSearchProps {
  value: string;
  onChange: (text: string) => void;
}

export default function TodoSearch({ value, onChange }: TodoSearchProps) {
  return (
    <div className="relative w-full">
      <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔍  할 일 검색..."
        className="w-full h-[47px] px-4 py-3 items-center rounded-[8px] border-border border-1 text-body text-secondary"
      />
    </div>
  )
}