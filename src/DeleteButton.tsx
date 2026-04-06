export default function DeleteButton({ onDelete }) {
    return (
        <>
            <button onClick={() => onDelete()}>🗑</button>
        </>
    );
}
