import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { todos } from "./todos.data";

function App() {

  return (
    <div className="frame3">
      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList todos={todos} />
      </div>

      <div className="frame2">
        <TodoHeader />
      </div>
      <div className="container">
        <TodoList todos={[]} />
      </div>
    </div>
  );
}

export default App;