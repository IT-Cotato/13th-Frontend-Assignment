import { CATEGORY_OPTIONS } from "../data/categoryOption";

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

  const wholeOption = {
    value: "전체",
    activeClass: "bg-whole border-whole text-white",
    inactiveClass: "text-whole"
  };

  const categories = isShowAll ? [wholeOption, ...CATEGORY_OPTIONS] : CATEGORY_OPTIONS;

  return (
    <div className="radioContainer flex gap-3 mb-4">
      {categories.map((category) => {
        const isSelected = selected === category.value;
        const newId = `${name}-${category.value}`;

        return (
          <div key={category.value}>
            <input
              type="radio"
              id={newId}
              name={name}
              value={category.value}
              checked={isSelected}
              onChange={() => onSelect(category.value)}
              className="sr-only outline-none"
            />
            <label
              htmlFor={newId}
              className={`
                px-4.5 py-2.5 rounded-lg border-2 cursor-pointer
                ${isSelected 
                  ? category.activeClass
                  : category.inactiveClass
                }
              `}
            >
              {category.value}
            </label>
          </div>
        );
      })}
    </div>
  );
}