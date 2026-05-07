interface EmptyStateProps {
  variant?: 'empty' | 'no-results';
}

export default function EmptyState({ variant = 'empty' }: EmptyStateProps) {
  const cardContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',      
    paddingTop: '64px', 
    width: '640px',
    height: '233px',           
    boxSizing: 'border-box',
    
    borderRadius: '12px',
    background: '#FFF',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.10)',
    marginTop: '32px'          
  };

  const contentWrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'                
  };

  const iconStyle: React.CSSProperties = {
    fontSize: '40px',
    margin: 0,
    lineHeight: 1
  };

  const textStyle: React.CSSProperties = {
    font: 'var(--font-body)',
    color: '#6B7280',      
    margin: 0   
  };

  return (
    <div style={cardContainerStyle}>
      <div style={contentWrapperStyle}>
        <span style={iconStyle} role="img" aria-label={variant === 'no-results' ? 'search' : 'clipboard'}>
          {variant === 'no-results' ? '🔍' : '📋'}
        </span>
        <p style={textStyle}>{variant === 'no-results' ? '검색 결과가 없습니다' : '아직 할 일이 없어요'}</p>
      </div>
    </div>
  );
}