interface TodoCardProps {
  task: string;
}

export default function TodoCard({ task }: TodoCardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    fontSize: '16px',
    fontWeight: 500,
    color: '#374151',
    width: '100%',
    boxSizing: 'border-box'
  };

  return <div style={cardStyle}>{task}</div>;
}