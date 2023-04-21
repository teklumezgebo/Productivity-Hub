import React, { useState } from 'react';
import NavBar from "./NavBar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Task from './Task';

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
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasks => {
      const filteredList = tasks.filter((task) => task.id !== id)
      const displayFilteredList = filteredList.map((task) => {
        return (<Task 
          key={task.id} 
          id={task.id} 
          task={task.task} 
          dueDate={task.due} 
          onDelete={handleDelete}
          />)
      })
      setList(displayFilteredList)
    })

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
