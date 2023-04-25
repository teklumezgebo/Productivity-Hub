import React from "react";

function Journal({ id, passage }) {
    return(
        <p id={id}>{passage}</p>
    )
}

export default Journal