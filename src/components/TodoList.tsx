import TodoCard, { type Category } from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
};

type FilterCategory = Category | "전체";

type TodoListProps = {
  items: Todo[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  editingId: number | null;
  editingText: string;
  onEditStart: (id: number, text: string) => void;
  onEditChange: (value: string) => void;
  onEditSave: (id: number) => void;
  onEditCancel: () => void;
  inputCategory: Category;
  onCategoryChange: (category: Category) => void;
  // 검색/필터 관련 추가
  searchValue: string;
  onSearchChange: (value: string) => void;
  filterCategory: FilterCategory;
  onFilterCategoryChange: (category: FilterCategory) => void;
};

const CATEGORIES: Category[] = ["공부", "운동", "개인", "업무"];
const FILTER_CATEGORIES: FilterCategory[] = ["전체", "공부", "운동", "개인", "업무"];

export default function TodoList({
  items,
  inputValue,
  onInputChange,
  onAdd,
  onDelete,
  onToggle,
  editingId,
  editingText,
  onEditStart,
  onEditChange,
  onEditSave,
  onEditCancel,
  inputCategory,
  onCategoryChange,
  searchValue,
  onSearchChange,
  filterCategory,
  onFilterCategoryChange,
}: TodoListProps) {
  const total = items.length;
  const completed = items.filter((item) => item.completed).length;
  const notCompleted = total - completed;

  return (
    <div className="todo-list">
      <div className="todo-counter">
        <span className="todo-counter__item">
          전체 <strong className="todo-counter__count">{total}</strong>개
        </span>
        <span className="todo-counter__item">
          완료 <strong className="todo-counter__count todo-counter__count--done">{completed}</strong>개
        </span>
        <span className="todo-counter__item">
          미완료 <strong className="todo-counter__count todo-counter__count--not">{notCompleted}</strong>개
        </span>
      </div>

      <div className="todo-input-card">
        <input
          type="text"
          className="todo-input"
          placeholder="할 일을 입력하세요."
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        <button className="add-button" onClick={onAdd}>
          추가
        </button>
      </div>

      {/* 할 일 추가용 카테고리 선택 */}
      <div className="category-select">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-select__btn category-select__btn--${cat} ${
              inputCategory === cat ? "category-select__btn--active" : ""
            }`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <hr className="divider" />

      {/* 검색 input */}
      <div className="todo-search-card">
        <span className="todo-search-card__icon">🔍</span>
        <input
          type="text"
          aria-label="할 일 검색"
          className="todo-search"
          placeholder="할 일 검색..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* 카테고리 필터 버튼 */}
      <div className="category-select">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-select__btn category-select__btn--${cat} ${
              filterCategory === cat ? "category-select__btn--active" : ""
            }`}
            onClick={() => onFilterCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="todo-empty">
          <span className="todo-empty__icon">{"🔍"}</span>
          <p className="todo-empty__text">
            {searchValue || filterCategory !== "전체"
              ? "검색 결과가 없습니다"
              : "아직 할 일이 없어요"}
          </p>
        </div>
      ) : (
        <ul className="todo-items">
          {items.map((item) => (
            <li key={item.id}>
              <TodoCard
                text={item.text}
                completed={item.completed}
                category={item.category}
                isEditing={editingId === item.id}
                editingText={editingId === item.id ? editingText : ""}
                onDelete={() => onDelete(item.id)}
                onToggle={() => onToggle(item.id)}
                onEditStart={() => onEditStart(item.id, item.text)}
                onEditChange={onEditChange}
                onEditSave={() => onEditSave(item.id)}
                onEditCancel={onEditCancel}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}