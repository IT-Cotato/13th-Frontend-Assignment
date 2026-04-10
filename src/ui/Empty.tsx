export default function Empty() {
    const fileIcon = "📋";
    const notice = "아직 할 일이 없어요";
    return (
        <>
            <div id="emptyContainer">
                <div id="fileIcon">{fileIcon}</div>
                <p>{notice}</p>
            </div>
        </>
    );
}
