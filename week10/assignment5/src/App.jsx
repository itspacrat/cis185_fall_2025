import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function NewTask({ taskName }) {

  return (
    <>
      <p>
        this is a new task, titled: {taskName}
      </p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <button onclick="{NewTask}">Add Task...</button>
      <NewTask taskName={"TaskTitle"} />
      <NewTask taskName={"TaskTitle"} />
    </>
  )
}

export default App
