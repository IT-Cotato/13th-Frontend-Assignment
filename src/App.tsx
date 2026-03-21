import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoCard from './components/TodoCard';
import './App.css';


function App() {
  return (
    <div className="app-container">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default App;