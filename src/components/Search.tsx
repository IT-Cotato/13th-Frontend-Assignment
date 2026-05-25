import type { Dispatch, SetStateAction } from "react";

export default function Search({
  searchText,
  onSearchChange,
}: {
  searchText: string;
  onSearchChange: Dispatch<SetStateAction<string>>;
}) {

  return (
    <>
      <input
        className="toDoInput"
        type="text"
        placeholder="🔍 할 일 검색..."
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </>
  );
}
