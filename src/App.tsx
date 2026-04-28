import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'
import TodoOverview from './components/TodoOverview'
import TodoCategorySelector from './components/TodoCategorySelector'
import type { Category } from './components/TodoCategorySelector';
import { todoData } from './data/TodoData'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(todoData);
  const [ selectedCategory, setSelectedCategory ] = useState<Category>("공부");

  function handleAddTodo(text: string) {
    const newTodo = {
      id : Date.now(),
      todo : text,
      isCompleted : false,
      category : selectedCategory 
    };

    setTodos((prev) => [...prev, newTodo])
  }

  function handleToggle(id: number) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      )
    );
  }

  function handleDelete(id: number) {
    setTodos((prev) => 
      prev.filter((item) =>
      item.id !== id ));
  }

  function handleUpdate(id: number, newText: string) {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? {...item, todo: newText }
          : item
        )
      );
  }

  return (
    <div className="flex min-h-screen w-full items-start bg-[#F5F5F5]">
      <div className="mx-auto flex w-full max-w-[640px] flex-col items-start gap-[22px]">
        <TodoHeader />
        <TodoOverview todos={todos} />
        <TodoInput onAddTodo={handleAddTodo} />
        <TodoCategorySelector selectedCategory={selectedCategory} onChangeCategory={setSelectedCategory}/>
        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdate} />
      </div>
    </div>
  )
}

export default App