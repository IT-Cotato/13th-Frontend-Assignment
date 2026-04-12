type TodoInputProps = {
  value: string;
  onChange: (value: string) => void;
  onAdd: () => void;
};

function TodoInput({ value, onChange, onAdd }: TodoInputProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-[640px] items-center gap-2">
      <input
        type="text"
        value={value}
        placeholder="할 일을 입력하세요"
        onChange={(e) => onChange(e.target.value)}
        className="h-12 flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-normal leading-5 text-gray-800 outline-none placeholder:text-gray-400 focus:shadow-[0px_0px_0px_4px_rgba(59,130,246,1.00)] focus:outline focus:outline-2 focus:outline-offset-[-2px] focus:outline-blue-500"
      />

      <button
        type="submit"
        className="h-12 rounded-xl bg-blue-500 px-6 text-sm font-medium leading-5 text-white"
      >
        추가
      </button>
    </form>
  );
}

export default TodoInput;
