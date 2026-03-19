import "./App.css";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

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
  );
}

export default App;