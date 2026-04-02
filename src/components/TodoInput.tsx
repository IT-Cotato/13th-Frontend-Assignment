import { useState } from 'react';

interface TodoInputProps {
  onAdd: (task: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    width: '100%',
    marginTop: '32.4px',
  };

  const inputBaseStyle: React.CSSProperties = {
    flex: 1,
    padding: '12px 16px',
    borderRadius: '12px', 
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg-card)',
    font: 'var(--font-body)',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const inputFocusStyle: React.CSSProperties = {
    borderRadius: '8px',
    border: '2px solid #3B82F6',
    background: 'rgba(255, 255, 255, 0.00)',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#3B82F6',
    color: 'white',
    font: 'var(--font-sub)',
    cursor: 'pointer',
  };

  return (
    <form style={containerStyle} onSubmit={handleSubmit}>
      <input
        type="text"
        style={{
          ...inputBaseStyle,
          ...(isFocused ? inputFocusStyle : {}), 
        }}
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}  
        onBlur={() => setIsFocused(false)}  
      />
      <button type="submit" style={buttonStyle}>
        추가
      </button>
    </form>
  );
}