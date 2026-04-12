import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";

type TodoCardProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
};

function TodoCard({ text, completed, onToggle, onDelete }: TodoCardProps) {
  return (
    <div
      className={`flex h-14 w-full items-center justify-between rounded-xl bg-white p-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] ${
        completed ? "opacity-50" : ""
      }`}
    >
      <label className="flex cursor-pointer items-center gap-3">
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
          <del className="text-sm font-normal leading-5 text-gray-800">
            {text}
          </del>
        ) : (
          <span className="text-sm font-normal leading-5 text-gray-800">
            {text}
          </span>
        )}
      </label>

      <button
        type="button"
        onClick={onDelete}
        className="shrink-0 text-base text-gray-500"
        aria-label="할 일 삭제"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoCard;
