function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                Seventy Shades
            </div>
            <ul className="navbar-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/seasons">Seasons</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}

export default Navbar