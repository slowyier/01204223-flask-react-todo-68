import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import TodoItem from './TodoItem.jsx'
import TodoList from './TodoList.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const TODOLIST_API_URL = 'http://localhost:5000/api/todos/';

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <TodoList apiUrl={TODOLIST_API_URL}/>
          } 
        />
        <Route 
          path="/about" 
          element={
            <>
              <h1>About</h1>
              <p>This is a simple todo list application built with React and Flask.</p>
              <a href="/">Back to Home</a>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App
