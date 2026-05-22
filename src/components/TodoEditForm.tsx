import type { TodoCategory } from '../types/todo.types';

type TodoEditFormProps = {
  id: number;
  category: TodoCategory;
  editingText: string;
  isSaveDisabled: boolean;
  onEditChange: (text: string) => void;
  onEditSave: (id: number) => void;
};

export default function TodoEditForm({
  id,
  category,
  editingText,
  isSaveDisabled,
  onEditChange,
  onEditSave,
}: TodoEditFormProps) {
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaveDisabled) return;
    onEditSave(id);
  };

  return (
    <form className="card-edit-form" onSubmit={handleEditSubmit}>
      <input
        className="card-edit-input"
        type="text"
        value={editingText}
        aria-label="할 일 수정"
        onChange={(e) => onEditChange(e.target.value)}
        autoFocus
      />
      <span className={`category-tag category-${category}`}>{category}</span>
    </form>
  );
}
