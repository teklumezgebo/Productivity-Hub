import React from "react";
import Task from "./Task";

function TaskForm({ taskName, dueDate, onListChange, onTaskNameChange, onDueDateChange }) {
    
  const newTask = {
   task: taskName,
   due: dueDate
  }

   const postedTaskObj = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newTask)    
  }

  function handleFormSubmit(event) {
    event.preventDefault() 
    fetch('http://localhost:3000/tasks', postedTaskObj)
     .then(res => res.json())
     .then(task => {
        const displayTask = Object.values(task).map(() => {
            return (<Task key={task[2]} task={task[0]} dueDate={task[1]}/>)
        })
        onListChange(displayTask)
     })
  }
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input name="task" type="text" placeholder="Write your task here..." onChange={onTaskNameChange} value={taskName}></input>
            <input name="due-by" type="text" placeholder="Due by..." onChange={onDueDateChange} value={dueDate}></input>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default TaskForm