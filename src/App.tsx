import TodoHeader from "./component/TodoHeader"
import TodoList from "./component/TodoList"

function App() {
  return (
    <>
    <div className="flex flex-col w-[640px] mt-[80px] ml-[445px] mr-[464px] gap-[22px]">
      <TodoHeader />
      <TodoList />
    </div>
    </>
    
  )
}

export default App
