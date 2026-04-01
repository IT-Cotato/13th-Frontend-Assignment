import checked from "../assets/checked.svg";
import unchecked from "../assets/unchecked.svg";

type TodoCardProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
};

function TodoCard({ text, completed, onToggle }: TodoCardProps) {
  return (
    <div
      className={`flex h-14 w-full items-center gap-3 rounded-xl bg-white p-4 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10)] ${
        completed ? "opacity-50" : ""
      }`}
    >
      <img
        src={completed ? checked : unchecked}
        alt={completed ? "완료" : "미완료"}
        className="h-6 w-6 shrink-0 cursor-pointer"
        onClick={onToggle}
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
    </div>
  );
}

export default TodoCard;
