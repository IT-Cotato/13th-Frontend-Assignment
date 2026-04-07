import {useState} from 'react';

export default function TodoInput({onAddTodo} : {onAddTodo: (text:string) => void}) {
    let [todoText, setTodoText] = useState('');

    function handleWorksChange(e: React.ChangeEvent<HTMLInputElement>) {
        setTodoText(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const trimmed = todoText.trim();

        if (!trimmed) return;
      
        onAddTodo(trimmed);
        setTodoText('');
    }

    return (
        <form
            className='flex w-full items-center gap-[12px]' 
            onSubmit={handleSubmit}>
            <input
                className='flex-1 px-[16px] py-[12px] rounded-[8px] border-[0.8px] border-[#E5E7EB] text-[14px] text-[#6B7280]
                            focus:border-[2px]
                            focus:border-[#3B82F6]
                            focus:text-[#1F2937]
                            focus:outline-none'
                placeholder='할 일을 입력하세요'
                value={todoText}
                onChange={handleWorksChange}
            />
            <button
                type='submit'
                className='px-[24px] py-[12.8px] rounded-[8px] bg-[#3B82F6] text-[14px] text-[#FFFFFF]'>
                    추가
            </button>
        </form>
    )
}