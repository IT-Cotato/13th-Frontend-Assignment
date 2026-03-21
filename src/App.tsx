import TodoHeader from "./TodoHeader.tsx"
import TodoList from "./TodoList.tsx"
import './App.css'

function App() {
  
  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList />
      </div>
    </div>
  )
}

export default App
