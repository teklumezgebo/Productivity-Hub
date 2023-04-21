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

  function handleFormSubmit() {
     fetch('http://localhost:3000/tasks', postedTaskObj)
     .then(res => res.json())
     .then(task => {
        const displayTask = task.map((task) => {
            return (<Task key={task.id} task={task.name} dueDate={task.due}/>)
        })
        onListChange(displayTask)
     })
  }
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input name="task" type="text" placeholder="Write your task here..." onChange={onTaskNameChange} value={taskName}></input>
            <input name="due-by" type="text" placeholder="Due by..." onChange={onDueDateChange} value={dueDate}></input>
            <select>
                <option>High Priority</option>
                <option>Low Priority</option>
            </select>
            <input type="submit"></input>
        </form>
    </div>
    )
}

export default TaskForm