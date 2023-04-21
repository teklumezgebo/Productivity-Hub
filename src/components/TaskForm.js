import React from "react";

function TaskForm() {
    return (
        <div>
            <form>
                <label for='task'>New Task</label>
                <input name="task" type="text" placeholder="Write your task here..."></input>
                <select>
                    <option>High Priority</option>
                    <option>Low Priority</option>
                </select>
            </form>
        </div>
    )
}

export default TaskForm