import TodoEmpty from "./component/TodoEmpty"
import TodoHeader from "./component/TodoHeader"
import TodoList from "./component/TodoList"
import TodoInput from "./component/TodoInput"
import { useState, useReducer } from "react";
import TodoStatus from "./component/TodoStatus";
import { type CategoryType, CATEGORY_STYLES } from "./constants/category";
import TodoSearch from "./component/TodoSearch";
import TodoSearchEmpty from "./component/TodoSearchEmpty";

interface TodoItem {
  id: number;
  content: string;
  isDone: boolean;
  category: CategoryType;
}

type TodoAction =
  | { type: "ADD_TODO"; payload: { text: string; category: CategoryType } }
  | { type: "DELETE_TODO"; payload: { id: number } }
  | { type: "TOGGLE_TODO"; payload: { id: number } }
  | { type: "UPDATE_TODO"; payload: { id: number; newContent: string } }
  | { type: "RESET_TODOS"; payload: TodoItem[] }; // 💡 key 리셋과 연동하거나 직접 리셋할 때 사용할 액션

const INITIAL_TODOS: TodoItem[] = [
  { id: 1, content: "리액트 공식문서 읽기", isDone: true, category: "공부" },
  { id: 2, content: "알고리즘 문제 풀기", isDone: true, category: "공부" },
  { id: 3, content: "운동 30분 하기", isDone: false, category: "운동" },
  { id: 4, content: "프로젝트 회의 준비", isDone: false, category: "업무" },
  { id: 5, content: "장보기 하기", isDone: false, category: "개인" },
  { id: 6, content: "블로그 포스팅 작성", isDone: false, category: "업무" },
];

// 2. Reducer 함수 구현 (useState CRUD -> useReducer 전환)
function todoReducer(state: TodoItem[], action: TodoAction): TodoItem[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.payload.text,
          isDone: false,
          category: action.payload.category,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, content: action.payload.newContent } : todo
      );
    case "RESET_TODOS":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_TODOS);

  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("공부");
  const [filter, setFilter] = useState<CategoryType | "전체">("전체");
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const matchesCategory = filter === "전체" || todo.category === filter;
    const matchesSearch = todo.content.toLowerCase().includes(search.toLocaleLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCount = todos.length;
  const doneCount = todos.filter((todo) => todo.isDone).length;
  const pendingCount = totalCount - doneCount;

  const handleAdd = (text: string) => {
    dispatch({ type: "ADD_TODO", payload: { text, category: selectedCategory } });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const handleUpdate = (id: number, newContent: string) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, newContent } });
  }

  return (
    <>
    <div className="flex flex-col w-[640px] mt-[80px] ml-[445px] mr-[464px] gap-6">
      <TodoHeader />
      <TodoStatus
        total={totalCount} 
        done={doneCount} 
        pending={pendingCount}
      />

      <TodoInput onAdd={handleAdd} />
      <div className="flex gap-3 h-[41px] items-center">
        {(["공부", "운동", "개인", "업무"] as CategoryType[]).map((cat) => {
          const isSelected = selectedCategory === cat;
          const style = CATEGORY_STYLES[cat];
          return (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isSelected}
              className={`flex items-center justify-center px-[18px] py-[10px] rounded-[8px] border-2 text-body transition-all
                ${isSelected? style.active: style.filter}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <hr className="w-full border-border" />

      <TodoSearch value={search} onChange={setSearch} />

      <div className="flex gap-3 h-[41px] items-center">
        <button
          onClick={() => setFilter("전체")}
          className={`flex items-center justify-center px-[18px] py-[10px] rounded-[8px] border-2 text-body transition-all
            ${filter === "전체" ? "bg-text border-text text-white" : "bg-white border-text text-text"}`}
        >
          전체
        </button>
        {(["공부", "운동", "개인", "업무"] as CategoryType[]).map((cat) => {
          const isSelected = filter === cat;
          const style = CATEGORY_STYLES[cat];
          return (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={isSelected}
              className={`flex items-center justify-center px-[18px] py-[10px] rounded-[8px] border-2 text-body transition-all
                ${isSelected? style.active: style.filter}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {todos.length ===  0 ? (
        <TodoEmpty />
      ) : filteredTodos.length > 0 ? (
        <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} onUpdate={handleUpdate}/>
      ) : (
        <TodoSearchEmpty />
      )}
    </div>
    </>
    
  )
}

export default App
