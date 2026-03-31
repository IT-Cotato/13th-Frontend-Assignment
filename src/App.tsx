import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoInput'

function App() {
  return (
    <div className="flex min-h-screen w-full items-start bg-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-start gap-[22px]">
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App