export default function TodoHeader() {
    const checkIcon = "✅";
    const title = "오늘의 할일";

    return (
        <div id="title">
            <h1>
                <span>{checkIcon}</span>
                <span>{title}</span>
            </h1>
        </div>
    );
}
