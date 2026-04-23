interface TodoStateProps {
  total: number;
  done: number;
  pending: number;
}

export default function TodoState({ total, done, pending }: TodoStateProps) {
  return(
    <div className="flex h-[45px] gap-3 px-3 py-4 items-center justify-start self-stretch bg-white rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">
      <p className="text-text-secondary text-body leading-[21px]">전체 <span className="font-[600] text-text">{total}</span>개</p>
      <p className="text-text-secondary text-body leading-[21px]">완료 <span className="font-[600] text-success">{done}</span>개</p>
      <p className="text-text-secondary text-body leading-[21px]">미완료 <span className="font-[600] text-primary">{pending}</span>개</p>
    </div>
  )
}