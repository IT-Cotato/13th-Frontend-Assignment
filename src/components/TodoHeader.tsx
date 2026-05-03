// src/components/TodoHeader.tsx

interface HeaderProps {
    subtitle: string; // 🌟 외부에서 소제목 글자를 받아올 겁니다!
  }
  
  export default function TodoHeader({ subtitle }: HeaderProps) {
    return (
      <header className="todo-header">

        <p className="subtitle">{subtitle}</p>
        <h1 className="title">✅ 오늘의 할 일</h1>
      </header>
    );
  }