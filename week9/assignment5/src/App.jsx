import { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './App.css'

/**
 * **The data for a task with its own state controllers.**
 * @param {number} newTaskID the task's id in the list
 * @param {string} newTaskText the task's description/goal
 */
function TaskData({ newTaskID, newTaskText }) {
  // unholy/funny one-liner useState deconstructor im trying out
  const [
    [taskID, setTaskID],
    [taskText, setTaskText],
    [newTaskCompleted, setTaskCompleted],
    [newCreatedDate /* no setter, this will not change */]
  ] = [
      useState(newTaskID - 0), // type annotation workaround
      useState(newTaskText + ""), // type annotation workaround
      useState(false),
      useState("" + new Date())
    ];
  return (
    <table style={{ padding: 13 + 'px', borderStyle: "solid", borderColor: "#4a967dff", borderRadius: 10 + 'px' }}>
      <tbody>
        <tr>
          <td colSpan={2} style={{ textAlign: 'center', textDecoration: 'bold' }}>Task: {taskText}</td>
          <td style={{ color: '#01dfc17a', textAlign: 'left', padding: 10 + 'px' }}>id: {taskID}</td>
          <td rowSpan={3} style={{ borderLeft: 'dashed', paddingLeft: 13 + 'px' }}><p>done?</p><input type={"checkbox"}></input></td>

        </tr>

        <tr>

        </tr>
        <tr><td colSpan={2} style={{ color: '#ffffff7a' }}>created: {newCreatedDate}</td></tr>
      </tbody>
    </table >
  );
}

/**
 * The tasks list on the main app page
 * @returns JSX.Element
 */
function TasksRoot() {
  const [tasks, setTasks] = useState([]);
  const [nextTaskText, setNextTaskText] = useState("no description set");
  const [taskCount, setTaskCount] = useState(0)

  // update new task text on input box changed
  const handleSetNextTaskText = (event) => {
    console.log("handleSetNextTaskText event value: " + event.target.value)
    setNextTaskText(event.target.value)
    console.log("new task text: " + nextTaskText)
  }

  // add a new task to the list
  const handleAddItem = () => {
    const newTask = <TaskData taskText={nextTaskText} taskID={taskCount} />;
    setTasks([...tasks, newTask]);
    setTaskCount(taskCount + 1);
  };

  return (
    <>
      <div><input type={"text"} placeholder={"new task description..."} onChange={handleSetNextTaskText}></input></div>
      <button onClick={handleAddItem}>Add Task</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index} style={{ margin: 10 + 'px' }}>{item}</li>
        ))}
      </ul>


    </>
  );
}

// turns out you can use export default in the signiature of your 
// export default functions instead of declaring it underneath
export default function App() {

  return (
    <>
      <h1>Task Dashboard</h1>

      <TasksRoot />
    </>
  )
}
