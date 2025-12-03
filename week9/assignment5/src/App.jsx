import { useRef, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

/**
 * The data for a user's task, including things like
 * it's description, identifier, and when it was created.
 */
class UserTaskData {
  /**
   * Take in a task description and ID number and
   * return a new TaskData
   * @param {string} description the task/goal to complete.
   * @param {number} id a **unique** identifying number for this task entry.
   */
  constructor(description, id) {
    this.description = description;
    this.id = id;
    this.createdAt = new Date();
    this.complete = false;
  }
}
/**
 * **The data for a task with its own state controllers.**
 * @param {number} newTaskID the task's id in the list
 * @param {string} newTaskText the task's description/goal
 */
function Task({ newTaskID, newTaskText }) {
  // unholy/funny one-liner useState deconstructor im trying out
  const [
    [taskID, setTaskID],
    [taskText, setTaskText],
    [newTaskCompleted, setTaskCompleted],
    [newCreatedDate /* no setter, this will not change */],
  ] = [
      useState(newTaskID - 0), // type annotation workaround
      useState(newTaskText + ""), // type annotation workaround
      useState(false),
      useState("" + new Date()),
    ];
  return (
    <table
      style={{
        padding: 13 + "px",
        borderStyle: "solid",
        borderColor: "#4a967dff",
        borderRadius: 10 + "px",
      }}
    >
      <tbody>
        <tr>
          <td
            colSpan={2}
            rowSpan={2}
            style={{ textAlign: "center", textDecoration: "bold" }}
          >
            Task: {taskText}
          </td>
          <td
            style={{
              color: "#01dfc17a",
              textAlign: "right",
              padding: 10 + "px",
            }}
          >
            id: {taskID}
          </td>
          <td
            rowSpan={3}
            style={{ borderLeft: "dashed", paddingLeft: 13 + "px" }}
          >
            <p>done?</p>
            <input type={"checkbox"}></input>
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td colSpan={2} style={{ color: "#ffffff7a" }}>
            created: {newCreatedDate}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

/**
 * The data for a user's profile in this app; stores the
 * user's name and their list of tasks, as well as how many tasks they've completed.
 */
class UserProfileData {
  /**
   * create profile data for a user based on their first name.
   * @param {string} name the name of the user this profile belongs to
   */
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.completeTasks = [];
  }
  /**
   * @returns {number} the number of tasks this user has not completed.
   */
  getIncompleteTaskCount() {
    return this.tasks.length;
  }
  /**
   * @returns {number} the number of tasks this user has marked as completed.
   */
  getCompleteTaskCount() {
    return this.completeTasks.length;
  }
  /**
   * @returns {number} the total number of tasks (*Complete + Incomplete*) for this user.
   */
  getTotalTaskCount() {
    return this.getCompleteTaskCount() + this.getIncompleteTaskCount;
  }
}
/**
 * A profile that consists of a user and their tasks.
 *
 * return this up to the DOM for rendering.
 * @param {string} newUser the name of the new user to create a profile for
 * @returns vDOM fragment
 */
function UserProfile({ newUser }) {
  /*
     === State Management Consts ===
  */
  const [data, setData] = useState(new UserProfileData(newUser));
  const [tasks, setTasks] = useState([]);
  const [nextTaskText, setNextTaskText] = useState("no description set");
  const [taskCount, setTaskCount] = useState(0);

  // debugs
  console.log("new user: " + data.name);

  // update the next new task text on input box changed
  const handleSetNextTaskText = (e) => {
    {
      // make sure this runs before we log?
      console.log("handleSetNextTaskText event value: " + e.target.value);
      setNextTaskText(e.target.value);
    }
    console.log("new task text: " + nextTaskText);
  };

  /** add a new task to the list of tasks */
  const handleAddItem = () => {
    const newTask = new UserTaskData(nextTaskText, taskCount);
    setTasks([...tasks, newTask]);
    console.log("created task: " + taskCount);
    setTaskCount(taskCount + 1);
    console.log("next task will be: " + taskCount);
  };
  /*
    === COMPONENT METHODS ===
  */
  const handleAddUserTask = () => {
    /* re-set user tasks with new task here */
  };
  return (
    <>
      <h5>{data.name}</h5>
      <input
        type={"text"}
        placeholder={"new task description..."}
        onChange={handleSetNextTaskText}
      />
      <button onClick={handleAddItem}>Add Task</button>

      {tasks.map((item, index) => (
        <div key={index} style={{ margin: 10 + "px" }} className="md-col-4">
          {item}
        </div>
      ))}
    </>
  );
}

function UserProfilesSelector() {
  // another really silly multi-deconstructor for useState()s
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState("");

  return (
    <form style={{ top: 5 + "px", right: 5 + "px", position: "fixed" }}>
      <label htmlFor={"profileSelector"}>Select profile...</label>
      <br />
      <select name={"profileSelector"} id={"profilesDropdown"}>
        <option value={"user1"}>user1</option>
        <option value={"user2"}>user2</option>
        <option value={"user3"}>user3</option>
      </select>
    </form>
  );
}
// turns out you can use export default in the signiature of your
// export default functions instead of declaring it underneath
export default function App() {
  // default user data setup
  const [currentUser, setCurrentUser] = useState("Alice");
  const defaultUserProfile = <UserProfile newUser={currentUser} />;

  //*
  // Utilize a dictionary to store user profiles for
  // easier switching logic
  const [userProfiles, setUserProfiles] = useState({
    // default user "Alice" profile first
    "Alice": defaultUserProfile,
  });

  const handleAddProfile = () => {
    setUserProfiles([...userProfiles]);
    console.log("added user profile");
  };
  return (
    <>
      <UserProfilesSelector />

      <h1>Task Dashboard</h1>
      <div id={"profileRoot"}>
        {Object.keys(userProfiles).map((profileName) => (
          <div key={profileName}>{userProfiles["Alice"]}</div>
        ))}
      </div>
    </>
  );
}
