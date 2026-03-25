export default function TodoEmpty() {
  return (
    <div className="flex flex-col w-[640px] pt-[64px] h-[233px] gap-3 justify-start items-center bg-white rounded-[12px]">
      <p className="text-[48px] leading-[72px]">📋</p>
      <p className="text-gray-400 text-body leading-[21px]">
        아직 할 일이 없어요
      </p>
    </div>
  );
}