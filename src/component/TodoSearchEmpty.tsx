export default function TodoSearchEmpty() {
  return (
    <div className="flex flex-col w-full h-[250px] gap-4 items-center justify-center rounded-[12px] border-white bg-white">
      <span className="text-[48px]">🔍</span>
      <p className="text-body text-secondary">검색 결과가 없습니다.</p>
    </div>
  )
}