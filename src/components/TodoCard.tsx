interface TodoCardProps {
  task: string;
}

export default function TodoCard({ task }: TodoCardProps) {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',           
    alignSelf: 'stretch',       
    boxSizing: 'border-box',
    width: '100%',

    backgroundColor: 'var(--bg-card)', 
    borderRadius: '12px',              
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.10)', 
    
    font: 'var(--font-body)',         
    color: 'var(--text)',           
    textAlign: 'left'
  };

  return (
    <div style={cardStyle}>
      {task}
    </div>
  );
}