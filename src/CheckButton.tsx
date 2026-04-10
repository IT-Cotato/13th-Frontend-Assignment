import checkIcon from "./resource/checked-icon.png";

export default function CheckButton(completed: true | false) {
    const handleCheckbox = () => {
        console.log("체크!");
    };
    return (
        <>
            <span className="check-icon" onClick={handleCheckbox}>
                {completed && (
                    <img src={checkIcon} alt="삭제" width={14} height={10} />
                )}
            </span>
        </>
    );
}
