# Assignment 5 - React Application
## About
### Description
This React + Vite app is an example of the basics of defining, constructing, and calling components, as well as handling page state in a web application.

### Goals
**Users**
- allow for creation and deletion of user profiles
- allow for switching between profiles

**Tasks**
- Allow for adding a list of tasks to each User's profile
- Allow for the updating and deleting of tasks from each profile

**Storage**
- Allow for loading a list of profiles + tasks from local storage
- Allow for saving the current set of profiles + tasks to local storage

## Usage
```zsh
# navigate to this repo's week9/assignment5 directory
cd /path/to/repo/week9/assignment5

# install dependencies
npm install vite react-bootstrap bootstrap

# locally host the project with `npm run`
npm run dev
```

## Process
### Wireframing
Below are some visual wireframes for the profile data structure:
| Component Data | Application Outline |
| --- | --- |
| <img src="https://raw.githubusercontent.com/itspacrat/cis185_fall_2025/refs/heads/main/week9/outlines/component_wireframe.JPG" /> | <img src="https://raw.githubusercontent.com/itspacrat/cis185_fall_2025/refs/heads/main/week9/outlines/visual_wireframe.JPG"> |

| Updated Class Data structure for profiles |
|---|
| <img src="https://github.com/itspacrat/cis185_fall_2025/blob/main/week9/outlines/updated-data_wireframe_compressed.jpg"> |

## Referenced materials

**React\.dev**
- [Updating objects in state](https://react.dev/learn/updating-objects-in-state)
- [React eventlisteners + handling events](https://react.dev/learn#responding-to-events)
- [Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)<br>*<sub>I didn't end up using this, but knowing error handling technique is always useful so i kept it in.</sub>*
- [Passing arguments/"props" to components](https://react.dev/learn/passing-props-to-a-component#step-2-read-props-inside-the-child-component) <br> *<sub>this one was due to a mishap in my data design, but i thought it was a helpful deep dive to include.</sub>*

**W3Schools**
- [JS Spread (...) operator](https://www.w3schools.com/react/react_es6_spread.asp)

**StackOverflow**
- [Managing state between components](https://stackoverflow.com/questions/67629110/whats-the-right-way-to-change-the-state-of-another-component-in-react)

**LogRocket**
- [React localStorage](https://blog.logrocket.com/using-localstorage-react-hooks/)

**(AI) Google's Gemini / in-search responses**
- [Dynamically adding elements](https://www.google.com/search?q=dynamically+add+elements+to+page+react+js&uact=5&oq=dynamically+add+elements+to+page+react+js)