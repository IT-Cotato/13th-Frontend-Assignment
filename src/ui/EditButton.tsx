import editIcon from "../resource/edit.png";

export default function EditButton({ id }: { id: number }) {
    return (
        <>
            <button id="edit-button">
                <img src={editIcon} alt="삭제" width={20} height={20} />
            </button>
        </>
    );
}
