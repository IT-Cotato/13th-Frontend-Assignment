export default function TodoCategory({
  isShowAll,
  selected,
  onSelect,
  name
}: {
  isShowAll: boolean,
  selected: string;
  onSelect: (category: string) => void;
  name: string
}) {
  const baseCategories = ["공부", "운동", "업무", "개인"];
  const categories = isShowAll ? ["전체", ...baseCategories] : baseCategories;

  const styles: {[key: string]: string} = {
    전체: "bg-whole border-whole text-white",
    공부: "bg-study border-study text-white",
    운동: "bg-exercise border-exercise text-white",
    업무: "bg-work border-work text-white",
    개인: "bg-personal border-personal text-white"
  };

  const inactiveStyles: {[key: string]: string} = {
    전체: "text-whole",
    공부: "text-study",
    운동: "text-exercise",
    업무: "text-work",
    개인: "text-personal"
  };

  return (
    <div className="radioContainer flex gap-3 mb-4">
      {categories.map((category) => {
        const isSelected = selected === category;
        const newId = `${name}-${category}`;

        return (
          <div key={category}>
            <input
              type="radio"
              id={newId}
              name={name}
              value={category}
              checked={isSelected}
              onChange={() => onSelect(category)}
              className="sr-only outline-none"
            />
            <label
              htmlFor={newId}
              className={`
                px-4.5 py-2.5 rounded-lg border-2 cursor-pointer
                ${isSelected 
                  ? styles[category]
                  : inactiveStyles[category]
                }
              `}
            >
              {category}
            </label>
          </div>
        );
      })}
    </div>
  );
}