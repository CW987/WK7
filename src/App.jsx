import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Welcome to my website!</h1>
          <Link to=""
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
