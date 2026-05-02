export default function CategorySelector({
    categories,
    selectedCategory,
    onSelectCategory,
}: {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}) {
    return (
        <>
            <div className="categorySelector">
                {categories.map((category) => (
                    <label key={category}>
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={category === selectedCategory}
                            onChange={(e) => {
                                onSelectCategory(e.target.value);
                            }}
                        />
                        {category}
                    </label>
                ))}
            </div>
        </>
    );
}
