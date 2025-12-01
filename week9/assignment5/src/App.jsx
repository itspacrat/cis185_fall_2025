import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function NewTask({ taskName, taskID }) {
  // define state tracking for this component
  // "every NewTask is in charge of remembering its own:"
  const [title, setTitle] = useState(taskName)
  const [tid, setTaskID] = useState(taskID)

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

function DynamicElements() {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {

  return (
    <>
      <DynamicElements />
    </>
  )
}

export default App
