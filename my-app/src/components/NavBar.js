import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <nav>
            <img src="images/IMG_0653.PNG" alt="logo" className="logo"/>
            <h1>JEY's NY Brewery Locator</h1>
            <NavLink className="Nav"to="/home">Home</NavLink>
            <NavLink className="Nav"to="/about">About</NavLink>
            <NavLink className="Nav"to="/submit">Submit a Brewery</NavLink>
        </nav>
    )
}

export default NavBar