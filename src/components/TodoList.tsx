import TodoCard from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  items: Todo[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TodoList({
  items,
  inputValue,
  onInputChange,
  onAdd,
  onDelete,
  onToggle,
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
          placeholder="새로운 할 일"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        <button className="add-button" onClick={onAdd}>
          추가
        </button>
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
                onDelete={() => onDelete(item.id)}
                onToggle={() => onToggle(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}