import type { Dispatch, SetStateAction } from "react";

export default function TodoSortDropdown({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: "생성순" | "완료순" | "이름순";
  setSortOrder: Dispatch<SetStateAction<"생성순" | "완료순" | "이름순">>;
}) {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-gray-500 text-sm">정렬: </p>
      <select name="sort" value={sortOrder} onChange={(e) => setSortOrder(e.target.value as "생성순" | "완료순" | "이름순")} className="bg-white rounded-lg px-3 py-3 outline-blue-500 cursor-pointer">
        <option value="생성순">생성순</option>
        <option value="완료순">완료순</option>
        <option value="이름순">이름순</option>
      </select>
    </div>
  );
}
