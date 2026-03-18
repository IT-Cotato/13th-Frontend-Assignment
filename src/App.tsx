import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import './App.css'

function App() {

  return (
    <div className="todo-wrapper">
      <TodoHeader />
      <TodoList />
    </div>
  )
}

export default App
