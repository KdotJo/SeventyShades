import React from "react";
import { Link } from "react-router-dom";
import './spring.css'

function Spring () {
    return (
        <main>
            <h1>Spring Color Palettes</h1>
            <div>
            <Link className='link'to="/springwarmtone"><button className="Springwarmtone">Warm Tone</button></Link>
            <Link className='link'to="/springcoldtone"><button className="Springcoldtone">Cold Tone</button></Link>
            </div>
        </main>
    )
}

export default Spring