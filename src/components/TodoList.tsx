import TodoCard from "./TodoCard";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodoListProps = {
  items: Todo[];
  inputValue: string;
  onInputChange: (value: string) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
  onFocus: () => void;
  onBlur: () => void;
};

export default function TodoList({
  items,
  inputValue,
  onInputChange,
  onAdd,
  onDelete,
  onToggle,
  onFocus,
  onBlur,
}: TodoListProps) {
  if (items.length === 0) {
    return (
      <div className="todo-empty">
        <span className="todo-empty__icon">{"📋"}</span>
        <p className="todo-empty__text">{"아직 할 일이 없어요"}</p>
      </div>
    );
  }

return (
  <div className="todo-list">
    <div className="todo-input-card">
      <input
        type="text"
        className="todo-input"
        placeholder="새로운 할 일"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <button className="add-button" onClick={onAdd}>
        추가
      </button>
    </div>

    {items.map((item) => (
      <TodoCard
        key={item.id}
        text={item.text}
        done={item.done}
        onDelete={() => onDelete(item.id)}
        onToggle={() => onToggle(item.id)}
      />
    ))}
  </div>
);
}