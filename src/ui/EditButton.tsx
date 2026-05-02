import editIcon from "../resource/edit.png";

export default function EditButton({ onEdit }: { onEdit: () => void }) {
    return (
        <>
            <button id="edit-button" onClick={onEdit}>
                <img src={editIcon} alt="수정" width={20} height={20} />
            </button>
        </>
    );
}
