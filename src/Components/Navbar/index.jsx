import { useState } from "react"
import Dropdown from "../Dropdown/Dropdown"
function Navbar() {
    
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <a href="/">Seventy Shades</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/seasons">Seasons</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <Dropdown/>
        
        </>
    )
}

export default Navbar