export default function TodoHeader() {
  return (
    <div className="flex flex-col py-[10px] gap-[10px] items-start self-stretch">
      <div className="flex h-[36px] gap-[8px] items-center self-stretch">
        <h1 className= "leading-[36px]">✅</h1>
        <h1 className="leading-[36px]" >오늘의 할 일</h1>
      </div>
    </div>
  )
}