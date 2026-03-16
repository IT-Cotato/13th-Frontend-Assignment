const headerStyle = {
  theme: {
    color: '#1F2937',
    fontFamily: 'Pretendard',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '36px',
  },
}
export default function TodoHeader() {
  return (
    <div className="flex w-full py-[10px] gap-[10px] items-start">
      <div className="flex gap-[8px]">
        <p style={headerStyle.theme}>✅</p>
        <p style={headerStyle.theme}>오늘의 할 일</p>
      </div>
    </div>
  )
}