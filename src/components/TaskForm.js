import React from "react";

function TaskForm({ taskName, dueDate, onTaskNameChange, onDueDateChange }) {
    
    // function handleFormSubmit() {
    //     const newTask = {
    //       task: taskName,
    //       due: dueDate
    //     }
    
    //     fetch('http://localhost:3000/tasks', )
    //   }
    
    return (
        <div>
            <form>
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