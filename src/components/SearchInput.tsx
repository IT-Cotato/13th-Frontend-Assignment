import './SearchInput.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        className="search-input"
        placeholder="할 일 검색..."
        aria-label="할 일 검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
