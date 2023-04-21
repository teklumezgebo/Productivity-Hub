import React from "react";
import Task from "./Task";

function TaskForm({ taskName, dueDate, onListChange, onTaskNameChange, onDueDateChange, onDelete }) {
    
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
        console.log(task)
        const displayTask = Object.values(task).map(() => {
            return (<Task id={task[3]} key={task[2]} task={task[0]} dueDate={task[1]} onDelete={onDelete}/>)
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