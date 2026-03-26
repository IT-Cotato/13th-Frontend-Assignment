import { TODO_ITEMS } from "./todoItems";
import { Card } from "./TodoCard";

export default function TodoList() {
  const isEmpty = TODO_ITEMS.length === 0;

  return (
    <>
      {isEmpty && (
        <div className="emptyList">
          <div className="emptyContainer">
            <div className="emptyIcon">📋</div>
            <div className="emptyText">아직 할 일이 없어요</div>
          </div>
        </div>
      )}

      {!isEmpty && (
      <ul className="toDoList">
        {TODO_ITEMS.map((item) => (
          <Card key={item.id} name={item.name} isChecked={item.isChecked} />
        ))}
      </ul>
    )
  }

    </>
  );
    
}
