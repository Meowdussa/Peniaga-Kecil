import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <div className="navbar">
            <div className="rightside">
                <Link to="/">Home</Link> <br/>
                <Link to="/about">About</Link>
            </div>
            
        </div>
    )
}
export default Navbar;
