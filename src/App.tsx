import './App.css';
import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoCount from './components/TodoCount';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import type { Todo, TodoCategory } from './types/todo';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TodoCategory>('공부');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '리액트 공식문서 읽기', completed: true, category: '공부' },
    { id: 2, text: '알고리즘 문제 풀기', completed: true, category: '공부' },
    { id: 3, text: '운동 30분 하기', completed: false, category: '운동' },
    { id: 4, text: '프로젝트 회의 준비', completed: false, category: '업무' },
    { id: 5, text: '장보기 하기', completed: false, category: '개인' },
  ]);

  const handleChangeInput = (value: string) => {
    setInputText(value);
  };

  const handleAddTodo = () => {
    const trimmedText = inputText.trim();

    if (trimmedText === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
      category: selectedCategory,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputText('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) => 
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleStartEdit = (id: number, text: string) => {
    setEditingId(id);
    setEditingText(text);
  };
  
  const handleSaveEdit = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, text: editingText }
          : todo
      )
    );
    setEditingId(null);
    setEditingText('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingText('');
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => 
      prev.filter((todo) =>
        todo.id !== id));
  };

  return (
    <div className="todo">
      <TodoHeader title="오늘의 할 일" />
      <TodoCount todos={todos} />
      <TodoInput
        inputText={inputText}
        selectedCategory={selectedCategory}
        onChangeInput={handleChangeInput}
        onChangeCategory={setSelectedCategory}
        onAddTodo={handleAddTodo} 
      />
      <TodoList 
        todos={todos} 
        editingId={editingId}
        editingText={editingText}
        onChangeEditText={setEditingText}
        onStartEdit={handleStartEdit}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
        onToggleTodo={handleToggleTodo} 
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;