import magnifier from "../resource/magnifier.png";

type EmptyType = "total" | "search";

export default function Empty({ type }: { type: EmptyType }) {
    const fileIcon = "📋";
    const totalNotice = "아직 할 일이 없어요";
    const searchNotice = "검색 결과가 없습니다.";

    const totalCountEmpty = (
        <div id="emptyContainer">
            <div id="fileIcon">{fileIcon}</div>
            <p>{totalNotice}</p>
        </div>
    );

    const searchCountyEmpty = (
        <div id="emptyContainer">
            <img src={magnifier} />
            <p>{searchNotice}</p>
        </div>
    );

    if (type === "search") {
        return searchCountyEmpty;
    } else return totalCountEmpty;
}
