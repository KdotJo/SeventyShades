import { useState } from "react"
import "./navbar.css"

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <a href="/">Seventy Shades</a>
            </div>
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
                    <li>Seasons</li>
                </div>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
                <li><a href="/spring">Spring</a></li>
                <li><a href="/summer">Summer</a></li>
                <li><a href="/fall">Fall</a></li>
                <li><a href="/winter">Winter</a></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar