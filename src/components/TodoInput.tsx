import '../css/TodoInput.css';


type TodoInputProps = {
  value:string;
  onChange: (text: string) => void;
  onAdd: () => void;
};

export default function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    onAdd();
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        className='todo-input'
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" className="todo-button">
        추가
      </button>
    </form>
  )
}