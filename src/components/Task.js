import React from "react";

function Task({ task, dueDate }) {
    return (
        <div>
            <h3>{task} Due: {dueDate}</h3>
            <button>x</button>
        </div>
    )
}

export default Task