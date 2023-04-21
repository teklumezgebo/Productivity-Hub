import React, { useState } from 'react';
import NavBar from "./NavBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [list, setList] = useState([])
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')

  function handleListChange(newTask) {
    setList(newTask)
  }

  function handleNewTask(newTask) {
    setList([...list, newTask])
  }

  function handleTaskNameChange(event) {
    setTaskName(event.target.value)
  }

  function handleDueDateChange(event) {
    setDueDate(event.target.value)
  }

  function filterList(id) {
    const filteredList = list.filter((task) => task.props.id !== id)
    setList(() => [...list, filteredList])
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => filterList(id))
  }

  return (
    <div>
      <NavBar />
      <br></br>
      <TaskForm taskName={taskName} dueDate={dueDate} onNewTask={handleNewTask} onTaskNameChange={handleTaskNameChange} onDueDateChange={handleDueDateChange} onDelete={handleDelete}/>
      <TaskList list={list} onListChange={handleListChange} onDelete={handleDelete}/>
    </div>
  )
}

export default App;
