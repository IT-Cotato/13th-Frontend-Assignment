import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoInput'
import {todoData} from './data/TodoData'
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState(todoData);

  function handleAddTodo(text: string) {
    const newTodo = {
      id : Date.now(),
      todo : text,
      isCompleted : false
    };

    setTodos((prev) => [...prev, newTodo])
  }

  return (
    <div className="flex min-h-screen w-full items-start bg-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-start gap-[22px]">
        <TodoHeader />
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App