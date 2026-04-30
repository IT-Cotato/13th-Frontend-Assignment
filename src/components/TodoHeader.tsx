interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string; // 추가된 부분
}

// src/components/TodoHeader.tsx



interface Todo {

  id: number;

  text: string;

  completed: boolean;

}



interface TodoHeaderProps {

  todos?: Todo[]; // 물음표를 붙여서 필수가 아님 명시

}



// 부모에게서 데이터(todos)를 못 받으면 빈 배열 기본 사용

const TodoHeader = ({ todos = [] }: TodoHeaderProps) => {

  const mainTitle = "✅ 오늘의 할 일";



  const totalCount = todos.length;

  const doneCount = todos.filter(todo => todo.completed).length;

  const notDoneCount = totalCount - doneCount;



  return (

    <header className="todo-header">

      <h1 className="header-title">{mainTitle}</h1>

     

      <div className="todo-stats">

        <span>

          전체 <strong className="count-total">{totalCount}</strong>개

        </span>

        <span>

          완료 <strong className="count-done">{doneCount}</strong>개

        </span>

        <span>

          미완료 <strong className="count-not-done">{notDoneCount}</strong>개

        </span>

      </div>

    </header>

  );

};



export default TodoHeader;