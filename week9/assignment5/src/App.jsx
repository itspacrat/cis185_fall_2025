import { useRef, useState } from 'react'
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
          <td colSpan={2} rowSpan={2} style={{ textAlign: 'center', textDecoration: 'bold' }}>Task: {taskText}</td>
          <td style={{ color: '#01dfc17a', textAlign: 'right', padding: 10 + 'px' }}>id: {taskID}</td>
          <td rowSpan={3} style={{ borderLeft: 'dashed', paddingLeft: 13 + 'px' }}><p>done?</p><input type={"checkbox"}></input></td>

        </tr>
        <tr>

        </tr>
        <tr><td colSpan={2} style={{ color: '#ffffff7a' }}>created: {newCreatedDate}</td></tr>
      </tbody>
    </table >
  );
}


/* TODO: use these in the DOM */
// figure out some way to store these in userProfiles when calling the main component for APP 
// unsuure of what to do here, but i have the idea for state management
/**
 * A user consists of their user name
 * @param {string} newUserName
 * @returns \<User />
 */
function User() {
  const [userName, setUserName] = useState("");
  console.log("passed name is " + userName)
  return (
    <h5>user: {userName}</h5>
  );
}
/**
 * A profile consists of a user and their tasks
 * @param {string} newUser
 * @returns \<UserProfile />
 */
function UserProfile({ newUser }) {
  const [user, setUser] = useState(newUser + "")
  console.log("new user: " + user)
  const [tasks, setTasks] = useState([])
  const [nextTaskText, setNextTaskText] = useState("no description set");
  const [taskCount, setTaskCount] = useState(0)

  // update the next new task text on input box changed
  const handleSetNextTaskText = (e) => {
    { // make sure this runs before we log?
      console.log("handleSetNextTaskText event value: " + e.target.value);
      setNextTaskText(e.target.value);
    }
    console.log("new task text: " + nextTaskText);
  }

  /** add a new task to the list of tasks */
  const handleAddItem = () => {
    const newTask = <TaskData taskText={nextTaskText} taskID={taskCount} />;
    setTasks([...tasks, newTask]);
    setTaskCount(taskCount + 1);
  };
  /*
    === COMPONENT METHODS ===
  */
  const handleAddUserTask = () => {
    /* re-set user tasks */
  }
  return (
    <>
    <h5>{ user }</h5>
    <input type={"text"} placeholder={"new task description..."} onChange={handleSetNextTaskText}></input>
      <button onClick={handleAddItem}>Add Task</button>


      {tasks.map((item, index) => (
        <div key={index} style={{ margin: 10 + 'px' }} className='md-col-4'>{item}</div>
      ))}
      </>
  );
}

// turns out you can use export default in the signiature of your 
// export default functions instead of declaring it underneath
export default function App() {

  // default user data setup
  const defaultUserName = "Alice";
  const defaultUserProfile = <UserProfile newUser={defaultUserName} />

  //* 
  // Utilize a dictionary to store user profiles for 
  // easier switching logic
  const [userProfiles, setUserProfiles] = useState({
    // default user "Alice" profile first
    "Alice": defaultUserProfile
  });

  const [currentUser, setCurrentUser] = useState("Alice")

  const handleAddProfile = () => {
    setUserProfiles([...userProfiles,]);
    console.log("added user profile");
  }
  return (
    <>
      <h1>Task Dashboard</h1>
      <div id={"profileRoot"}>
        {Object.keys(userProfiles).map((profileName) => (
          <div key={profileName}>{userProfiles["Alice"]}</div>
        ))}
      </div>
    </>
  )
}
