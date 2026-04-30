import TodoCard, { type Category } from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  category: Category;
};

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
};

const CATEGORIES: Category[] = ["공부", "운동", "개인", "업무"];

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

      <div className="category-select">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-select__btn category-select__btn--${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div className="todo-empty">
          <span className="todo-empty__icon">{"📋"}</span>
          <p className="todo-empty__text">{"아직 할 일이 없어요"}</p>
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