import './SearchInput.css';

type Props = {
  searchText: string;
  onChangeSearch: (value: string) => void;
};

function SearchInput({ searchText, onChangeSearch }: Props) {
  return (
    <div className="search-section">
      <input
        type="text"
        placeholder="🔍 할 일 검색..."
        className="search-input"
        value={searchText}
        onChange={(e) => onChangeSearch(e.target.value)}
        aria-label="할 일 검색"
      />
    </div>
  );
}

export default SearchInput;