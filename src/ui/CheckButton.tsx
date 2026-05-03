import checkIcon from "../resource/checked-icon.png";

export default function CheckButton({
    onToggle,
    completed,
    id,
}: {
    onToggle: () => void;
    completed: true | false;
    id: number;
}) {
    return (
        <>
            <input
                type="checkbox"
                id={`check-${id}`}
                checked={completed}
                onChange={onToggle}
            />
            <label htmlFor={`check-${id}`} className="check-icon">
                {completed && (
                    <img src={checkIcon} alt="체크" width={14} height={10} />
                )}
            </label>
        </>
    );
}
