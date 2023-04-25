import React from "react";
import Task from "./Task";

function TaskForm({ taskName, dueDate, onNewTask, onTaskNameChange, onDueDateChange, onDelete }) {
    
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
        const displayedTask = (<Task 
            id={task.id} 
            key={task.id} 
            task={task.task} 
            dueDate={task.due} 
            onDelete={onDelete}
            />)
        onNewTask(displayedTask)
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