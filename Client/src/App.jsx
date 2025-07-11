import { useState } from 'react'
import Home from "./components/Home/Home";
import LoginPage from "./components/Login/Login";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage/>
    </>
  )
}

export default App
