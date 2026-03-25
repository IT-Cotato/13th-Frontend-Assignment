import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
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
