import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <img src="images/IMG_0653.PNG" alt="logo" className="logo"/>
            <h1>JEY's Brewery Locator</h1>
            <Link className="Nav"to="/home">Home</Link>
            <Link className="Nav"to="/about">About</Link>
            <Link className="Nav"to="/submit">Submit a Brewery</Link>
        </nav>
    )
}

export default NavBar