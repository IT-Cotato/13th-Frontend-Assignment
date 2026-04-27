import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";
import type { TodoCategory } from "../types/todo";

type TodoItemProps = {
  text: string;
  completed: boolean;
  category: TodoCategory;
  isEditing: boolean;
  editingText: string;
  onToggle: () => void;
  onDelete: () => void;
  onStartEdit: () => void;
  onChangeEditingText: (value: string) => void;
  onSaveEdit: () => void;
  onCancelEdit: () => void;
};

function TodoItem({
  text,
  completed,
  category,
  isEditing,
  editingText,
  onToggle,
  onDelete,
  onStartEdit,
  onChangeEditingText,
  onSaveEdit,
  onCancelEdit,
}: TodoItemProps) {
  const getCategoryTagClass = (
    currentCategory: TodoCategory,
    isCompleted: boolean,
  ) => {
    const opacityClass = isCompleted ? "opacity-50" : "";

    if (currentCategory === "공부") {
      return `inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-4 text-blue-500 ${opacityClass}`;
    }

    if (currentCategory === "운동") {
      return `inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-4 text-green-500 ${opacityClass}`;
    }

    if (currentCategory === "개인") {
      return `inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium leading-4 text-purple-500 ${opacityClass}`;
    }

    return `inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium leading-4 text-amber-500 ${opacityClass}`;
  };

  if (isEditing) {
    return (
      <div className="w-[640px] rounded-xl bg-white p-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)]">
        <div className="flex flex-1 items-center gap-3">
          <label className="flex h-6 w-6 items-center justify-center">
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

          <div className="flex flex-1 flex-col gap-[9px]">
            <input
              type="text"
              value={editingText}
              onChange={(e) => onChangeEditingText(e.target.value)}
              className="h-10 w-full rounded-lg bg-white px-3 py-2 text-sm font-normal leading-5 text-gray-800 outline-none shadow-[0px_0px_0px_4px_rgba(59,130,246,1.00)] outline outline-2 outline-offset-[-2px] outline-blue-500"
            />

            <div>
              <span className={getCategoryTagClass(category, false)}>
                {category}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <button
              type="button"
              onClick={onSaveEdit}
              className="h-9 w-14 rounded-lg bg-blue-500 text-xs font-medium leading-4 text-white"
            >
              저장
            </button>

            <button
              type="button"
              onClick={onCancelEdit}
              className="h-9 w-14 rounded-lg bg-white text-xs font-medium leading-4 text-gray-500 outline outline-2 outline-offset-[-2px] outline-gray-200"
            >
              취소
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-[640px] rounded-xl bg-white p-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] ${
        completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <label className="flex h-6 w-6 items-center justify-center">
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

          <div className="flex flex-1 flex-col gap-[9px]">
            {completed ? (
              <del className="text-sm font-normal leading-5 text-gray-800">
                {text}
              </del>
            ) : (
              <span className="text-sm font-normal leading-5 text-gray-800">
                {text}
              </span>
            )}

            <div>
              <span className={getCategoryTagClass(category, completed)}>
                {category}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 self-center">
          <button
            type="button"
            onClick={onStartEdit}
            className="flex h-8 w-8 items-center justify-center rounded-lg"
          >
            ✏️
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="flex h-8 w-8 items-center justify-center rounded-lg"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
