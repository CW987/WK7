import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1>Welcome to my website!</h1>
          <Link to="./components/UserPage">User page</Link>
          <Routes>
            <Route path="./componenets/UserPage" element={<h2>User Page</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
