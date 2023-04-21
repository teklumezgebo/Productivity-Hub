import React from "react";

function NavBar() {
    
    function fetchAPI() {
        fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <div>
            <h3>Home</h3>
            <h3>Place 1</h3>
            <h3>Place 2</h3>
            <button onClick={fetchAPI}>Toggle Mode</button>
        </div>
    )
}

export default NavBar