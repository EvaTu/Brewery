import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/submit">Submit a Brewery</Link>
        </nav>
    )
}

export default NavBar