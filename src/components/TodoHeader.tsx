export default function TodoHeader() {
  const emoji = "✅";
  const title = "오늘의 할 일";

  return (
    <div className="flex flex-col items-start gap-[10px] self-stretch py-[10px] mt-[80px]">
      <div className="flex h-[36px] items-center gap-[8px] self-stretch">
        <span className="text-[24px] font-bold leading-[36px] text-[#1F2937]">
          {emoji}
        </span>
        <span className="text-[24px] font-bold leading-[36px] text-[#1F2937]">
          {title}
        </span>
      </div>
    </div>
  );
}