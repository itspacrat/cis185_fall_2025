import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function NewTask({ taskName, id }) {
  // define state tracking for this component
  // "every NewTask is in charge of remembering its own:"
  const [title, setTitle] = useState(taskName)
  const [taskID, setTaskID] = useState(id)

  const handleRenameTask = () => {

  }
  return (
    <>
      <div class="card">
        <span><input type="text" placeholder="rename task..."></input></span>
        <button onclick={handleRenameTask}>Rename</button>
        <p>
          this is a new task, titled: {taskName}
        </p>
      </div>

    </>
  )
}

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Count: {count}</button>


      <NewTask taskName={"TaskTitle"} />
    </>
  )
}

export default App
