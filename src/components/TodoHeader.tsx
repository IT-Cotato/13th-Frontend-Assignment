interface TodoHeaderProps {
  title: string;
}

export default function TodoHeader({ title }: TodoHeaderProps) {
  const headerStyle: React.CSSProperties = {
    padding: '10px 0 10px 0', 
    textAlign: 'left',
  };

  const titleStyle: React.CSSProperties = {
    font: 'var(--font-h1)',  
    color: 'var(--text)',    
    display: 'flex',
    alignItems: 'center',
    gap: '8px',                 
    margin: 0,
    justifyContent: 'flex-start',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>
        {title}
      </h1>
    </header>
  );
}