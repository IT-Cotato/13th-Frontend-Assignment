import trashIcon from "./resource/trashcan-icon.png";

export default function DeleteButton({ onDelete }) {
    return (
        <>
            <button id="delete-button" onClick={() => onDelete()}>
                <img src={trashIcon} alt="삭제" width={20} height={20} />
            </button>
        </>
    );
}
