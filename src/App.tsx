// import { useState } from 'react'

import './App.css'
import { TodoHeader } from './components/TodoHeader';
import { Card1, Card2, Card3, Card4 } from './components/TodoCard';


function App() {
  return (
    <>
      <div className="container">
        <TodoHeader />
        <div className='toDoList'>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    </>
  )
}

export default App // 기본 내보내기 
