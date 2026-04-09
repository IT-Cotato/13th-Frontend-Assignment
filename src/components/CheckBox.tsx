import checkedIcon from "../assets/icons/checkedIcon.svg";

export default function CheckBox({
  completed,
  onToggle,
}: {
  completed: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={completed ? "CheckedBox" : "UncheckedBox"}
      onClick={onToggle}
      style={{ cursor: "pointer" }}
    >
      {completed && <img src={checkedIcon} alt="checked" />}
    </div>
  );
}
