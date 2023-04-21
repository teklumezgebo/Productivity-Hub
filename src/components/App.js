import React, { useState } from 'react';
import NavBar from "./NavBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [list, setList] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')

  function handleListChange(newTask) {
    setList(() => [...list, newTask])
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value)
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value)
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <TaskForm taskName={taskName} dueDate={dueDate} onListChange={handleListChange} onTaskNameChange={handleTaskNameChange} onDueDateChange={handleDueDateChange}/>
      <TaskList list={list}/>
    </div>
  )
}

export default App;
