import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {    
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <br></br>
            <NavLink to='/to-do-list'>To-Do-List</NavLink>
            <br></br>
            <NavLink to='/journal'>Journal</NavLink>
        </div>
    )
}

export default NavBar