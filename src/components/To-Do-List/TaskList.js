import React, { useEffect } from "react";
import Task from "./Task";

function TaskList({ list, onListChange, onDelete }) {
    
    useEffect(() => {
        fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(tasks => {
            const displayTask = tasks.map((task) => {
                return (<Task 
                    key={task.id} 
                    id={task.id} 
                    task={task.task} 
                    dueDate={task.due} 
                    onDelete={onDelete}
                    />)
            })
            onListChange(displayTask)
        })
    }, [])

    return (
        <div>
            {list}
        </div>
    )
}

export default TaskList