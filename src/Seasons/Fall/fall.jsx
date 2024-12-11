import React from "react";
import { Link } from "react-router-dom";
import './fall.css'



function Fall () {
    return (
        <main>
            <h1>Fall Color Palettes</h1>
            <div>
            <Link className='link'to="/fallwarmtone"><button className="Fallwarmtone">Warm Tone</button></Link>
            <Link className='link'to="/fallcoldtone"><button className="Fallcoldtone">Cold Tone</button></Link>
            </div>
        </main>
    )
}

export default Fall