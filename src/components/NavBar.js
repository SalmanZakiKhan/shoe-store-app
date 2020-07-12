import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="navbar">
            <h1>SHOE STORE</h1>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default NavBar
