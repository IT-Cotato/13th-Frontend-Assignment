interface TodoCardProps {
  content: string;
}

export default function TodoCard({ content }: TodoCardProps) {
  return (
    <li className="flex p-[16px] gap-[10px] items-start self-stretch bg-card rounded-[12px] shadow-[0_1px_3px_0_rgba(0,0,0,0.10)]">
      <p className="text-body leading-[21px]">{content}</p>
    </li>
  )
}