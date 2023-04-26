import React from "react";

function Task({ id, task, dueDate, onDelete }) {
    return (
        <div className="task">
            <h3>{task} Due: {dueDate}</h3>
            <button onClick={() => onDelete(id)}>x</button>
        </div>
    )
}

export default Task