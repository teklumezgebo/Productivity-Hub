import React from "react";

function Journal({ id, passage, onJournalDelete }) {
    return(
        <div>
            <p id={id}>{passage}</p>
            <button onClick={() => onJournalDelete(id)}>x</button>
        </div>
    )
}

export default Journal