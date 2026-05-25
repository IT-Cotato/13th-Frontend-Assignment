import "./css/App.css";
import TodoHeader from "./ui/TodoHeader";
import TodoInput from "./ui/TodoInput";
import TodoList from "./TodoList";
import TodoCounter from "./ui/TodoCounter";
import CategorySelector from "./ui/CategorySelector";
import type { TodoItem } from "./types";
import TodoFilter from "./ui/TodoFilter";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer";

export default function App() {
    // useReducer 전체 상태 관리
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todos, selectedCategory, filterCategory, searchText } = state;

    const categories = ["study", "exercise", "personal", "work"];
    const categoryLabels: Record<string, string> = {
        study: "공부",
        exercise: "운동",
        personal: "개인",
        work: "업무",
    };

    const filters = ["all", ...categories];
    const filterLabels: Record<string, string> = {
        all: "전체",
        ...categoryLabels,
    };

    // 투두 카운터 계산
    const totalCount = todos.length;
    const completedCount = todos.filter((item) => item.completed).length;
    const remainingCount = todos.filter((item) => !item.completed).length;

    // 카테고리로 필터링된 투두리스트
    const categoryFilteredList =
        filterCategory === "all"
            ? todos
            : todos.filter((item) => item.category === filterCategory);

    // 카테고리 내에서 검색어로 필터링된 투두리스트
    const searchFilteredList = categoryFilteredList.filter((item) =>
        item.text.toLowerCase().includes(searchText.toLowerCase()),
    );

    // 투두 추가 이벤트 핸들러
    function handleAddTodo(inputText: string) {
        dispatch({
            type: "ADD_TODO",
            inputText,
            selectedCategory,
            categoryLabels,
        });
    }

    // 체크 토글 이벤트 핸들러
    function handleToggle(id: number) {
        dispatch({ type: "TOGGLE_TODO", id });
    }

    // 삭제 버튼 이벤트 핸들러
    function handleDelete(id: number) {
        dispatch({ type: "DELETE_TODO", id });
    }

    // 수정 적용 핸들러
    function handleChangeTodo(nextTodo: TodoItem) {
        dispatch({ type: "CHANGE_TODO", nextTodo });
    }

    // 카테고리 선택 이벤트 핸들러
    function handleCategorySelect(category: string) {
        dispatch({ type: "SELECT_CATEGORY", category });
    }

    // 필터 선택 이벤트 핸들러
    function handleFilterCategory(category: string) {
        dispatch({ type: "FILTER_CATEGORY", category });
    }

    // 투두 검색 이벤트 핸들러
    const handleSearchTodo = (text: string) => {
        dispatch({ type: "SEARCH_TODO", text });
    };

    return (
        <>
            <TodoHeader />
            <TodoCounter
                totalCount={totalCount}
                completedCount={completedCount}
                remainingCount={remainingCount}
            />
            <TodoInput onAdd={handleAddTodo} />
            <CategorySelector
                categories={categories}
                categoryLabels={categoryLabels}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
            />
            <TodoFilter
                searchText={searchText}
                onSearch={handleSearchTodo}
                filters={filters}
                filterLabels={filterLabels}
                filterCategory={filterCategory}
                onFilterCategory={handleFilterCategory}
            />
            <TodoList
                totalCount={todos.length}
                filteredList={searchFilteredList}
                onChange={handleChangeTodo}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </>
    );
}
