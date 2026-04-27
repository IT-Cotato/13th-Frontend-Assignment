import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import type { TodoCategory } from "../types/todo";

type TodoCardProps = {
  id: number;
  text: string;
  completed: boolean;
  category: TodoCategory;
  isEditing: boolean;
  editingText: string;
  editingCategory: TodoCategory;
  onToggle: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
  onChangeEditingText: (value: string) => void;
  onChangeEditingCategory: (category: TodoCategory) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
};

function TodoCard({
  text,
  completed,
  category,
  isEditing,
  editingText,
  editingCategory,
  onToggle,
  onDelete,
  onStartEdit,
  onChangeEditingText,
  onChangeEditingCategory,
  onSaveEdit,
  onCancelEdit,
}: TodoCardProps) {
  if (isEditing) {
    return (
      <div className="w-[640px] rounded-2xl bg-white p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.10)]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={completed}
                onChange={onToggle}
                className="sr-only"
              />
              <img
                src={completed ? checked : unchecked}
                alt=""
                aria-hidden="true"
                className="h-6 w-6 shrink-0"
              />
            </label>

            <input
              type="text"
              value={editingText}
              onChange={(e) => onChangeEditingText(e.target.value)}
              className="h-14 flex-1 rounded-2xl border border-gray-200 bg-white px-5 text-[20px] text-gray-800 outline-none focus:shadow-[0px_0px_0px_4px_rgba(59,130,246,1.00)] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-blue-500"
            />

            <button
              type="button"
              onClick={onSaveEdit}
              className="h-14 rounded-2xl bg-blue-500 px-6 text-white"
            >
              저장
            </button>

            <button
              type="button"
              onClick={onCancelEdit}
              className="h-14 rounded-2xl border border-gray-300 px-6 text-gray-500"
            >
              취소
            </button>
          </div>

          <div className="flex gap-3 pl-10">
            <button
              type="button"
              onClick={() => onChangeEditingCategory("공부")}
              className={`rounded-xl border px-4 py-2 ${
                editingCategory === "공부"
                  ? "border-blue-500 text-blue-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              공부
            </button>

            <button
              type="button"
              onClick={() => onChangeEditingCategory("운동")}
              className={`rounded-xl border px-4 py-2 ${
                editingCategory === "운동"
                  ? "border-green-500 text-green-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              운동
            </button>

            <button
              type="button"
              onClick={() => onChangeEditingCategory("개인")}
              className={`rounded-xl border px-4 py-2 ${
                editingCategory === "개인"
                  ? "border-purple-500 text-purple-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              개인
            </button>

            <button
              type="button"
              onClick={() => onChangeEditingCategory("업무")}
              className={`rounded-xl border px-4 py-2 ${
                editingCategory === "업무"
                  ? "border-orange-500 text-orange-500"
                  : "border-gray-300 text-gray-500"
              }`}
            >
              업무
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-[640px] rounded-2xl bg-white p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.10)] ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={completed}
              onChange={onToggle}
              className="sr-only"
            />
            <img
              src={completed ? checked : unchecked}
              alt=""
              aria-hidden="true"
              className="h-6 w-6 shrink-0"
            />

            {completed ? (
              <del className="text-[20px] text-gray-400">{text}</del>
            ) : (
              <span className="text-[20px] text-gray-800">{text}</span>
            )}
          </label>

          <div className="pl-10">
            <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-600">
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button type="button" onClick={onStartEdit}>
            ✏️
          </button>
          <button type="button" onClick={onDelete}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
