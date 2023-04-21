import React from "react";

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
    .then(task => onListChange(task))
 }
    
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <label>New Task</label>
            <input name="task" type="text" placeholder="Write your task here..." onChange={onTaskNameChange} value={taskName}></input>
            <input name="due-by" type="text" placeholder="Due by..." onChange={onDueDateChange} value={dueDate}></input>
            <select>
                <option>High Priority</option>
                <option>Low Priority</option>
            </select>
        </form>
    </div>
    )
}

export default TaskForm