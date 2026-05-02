import checkedIcon from "../assets/icons/checkedIcon.svg";

export default function CheckBox({
  completed,
  onToggle,
}: {
  completed: boolean;
  onToggle: () => void;
}) {
  return (
    <label className={`cursor-pointer ${completed ? "CheckedBox" : "UncheckedBox"}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={completed}
        onChange={onToggle}
        aria-label={completed ? "완료" : "미완료"}
      />
      {completed && <img src={checkedIcon} alt="checked" />}
    </label>
  );
}
