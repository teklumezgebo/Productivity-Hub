import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {    
    return (
        <div>
            <NavLink to='/' className="NavLink">Home</NavLink>
            <br></br>
            <NavLink to='/to-do-list' className="NavLink">To-Do-List</NavLink>
            <br></br>
            <NavLink to='/journal' className="NavLink">Journal</NavLink>
        </div>
    )
}

export default NavBar