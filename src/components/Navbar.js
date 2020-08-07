import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav>
            <Link to="/">Heroes</Link>
            <Link to="/planets">Planets</Link>
            <Link to="/characters">Characters</Link>
        </nav>
    )
}
