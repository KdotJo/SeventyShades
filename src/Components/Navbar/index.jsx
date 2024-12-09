import { useState } from "react"
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <Link to="/">Seventy Shades</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <div className="menu-trigger" onClick={() => {setOpen(!open)}}>
                    <li>Seasons</li>
                </div>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <ul>
                <li><Link to="/spring">Spring</Link></li>
                <li><Link to="/summer">Summer</Link></li>
                <li><Link to="/fall">Fall</Link></li>
                <li><Link to="/winter">Winter</Link></li>
            </ul>
        </div>
        </>
    )
}

export default Navbar