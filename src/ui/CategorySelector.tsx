export default function CategorySelector({
    categories,
    categoryLabels,
    selectedCategory,
    onSelectCategory,
}: {
    categories: string[];
    categoryLabels: Record<string, string>;
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}) {
    return (
        <>
            <div className="categorySelector">
                {categories.map((category) => (
                    <label
                        key={category}
                        className={
                            "categories " +
                            (category === selectedCategory ? "checked" : "")
                        }
                        id={category}
                    >
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={category === selectedCategory}
                            onChange={(e) => {
                                onSelectCategory(e.target.value);
                            }}
                        />
                        {categoryLabels[category]}
                    </label>
                ))}
            </div>
        </>
    );
}
