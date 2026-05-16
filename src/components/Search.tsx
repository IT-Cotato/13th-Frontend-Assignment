import { type Dispatch, type SetStateAction } from "react";

export default function Search({
  searchText,
  onSeachChange,
}: {
  searchText: string;
  onSeachChange: Dispatch<SetStateAction<string>>;
}) {

  return (
    <>
      <input
        className="toDoInput"
        type="text"
        placeholder="🔍 할 일 검색..."
        value={searchText}
        onChange={(e) => onSeachChange(e.target.value)}
      />
    </>
  );
}
