import checkIcon from "../resource/checked-icon.png";

export default function CheckButton({
    onToggle,
    completed,
}: {
    onToggle: () => void;
    completed: true | false;
}) {
    return (
        <>
            <span className="check-icon" onClick={onToggle}>
                {completed && (
                    <img src={checkIcon} alt="체크" width={14} height={10} />
                )}
            </span>
        </>
    );
}
