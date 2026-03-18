interface TodoHeaderProps {
  title: string;
}

export default function TodoHeader({ title }: TodoHeaderProps) {
  return (
    <header style={{ textAlign: 'left', padding: '0 20px' }}>
      <h1 style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px',
        justifyContent: 'flex-start' 
      }}>
        {title}
      </h1>
    </header>
  );
}