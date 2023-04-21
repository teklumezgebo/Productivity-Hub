import React from "react";

function Task({ name, dueDate }) {
    return (
        <div>
            <p>{name} Due: {dueDate}</p>
        </div>
    )
}

export default Task