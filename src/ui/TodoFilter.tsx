import { type ChangeEvent } from "react";

export default function TodoSearch({
    searchText,
    onSearch,
    filters,
    filterLabels,
    filterCategory,
    onFilterCategory,
}: {
    searchText: string;
    onSearch: (e: ChangeEvent<HTMLInputElement, Element>) => void;
    filters: string[];
    filterLabels: Record<string, string>;
    filterCategory: string;
    onFilterCategory: (category: string) => void;
}) {
    return (
        <>
            <hr />
            <input
                type="text"
                placeholder="할 일 검색..."
                onChange={onSearch}
                value={searchText}
                className="todoSearch"
            ></input>
            <div className="categorySelector">
                {filters.map((filter) => (
                    <label
                        key={filter}
                        className={
                            "categories " +
                            (filter === filterCategory ? "checked" : "")
                        }
                        id={filter}
                    >
                        <input
                            type="radio"
                            name="filter"
                            value={filter}
                            checked={filter === filterCategory}
                            onChange={(e) => {
                                onFilterCategory(e.target.value);
                            }}
                        />
                        {filterLabels[filter]}
                    </label>
                ))}
            </div>
        </>
    );
}
