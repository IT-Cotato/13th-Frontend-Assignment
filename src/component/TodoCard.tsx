const cardStyle = {
  theme: {
    backgroundColor: '#fff',
    color: '#1F2937',
    borderRadius: '12px',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.10)',
  },
};

const textStyle = {
  theme: {
    color: '#1F2937',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '21px',
  },
}

interface TodoCardProps {
  content: string;
}

export default function TodoCard({ content }: TodoCardProps) {
  return (
    <div className="flex p-[16px] gap-[10px] items-start self-stretch" style={cardStyle.theme}>
      <p style={textStyle.theme}>{content}</p>
    </div>
  )
}