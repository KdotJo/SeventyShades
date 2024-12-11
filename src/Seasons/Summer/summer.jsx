import React from "react";
import './summer.css'
import { Link } from "react-router-dom";

function Summer () {
    return (
        <main>
            <h1>Summer Color Palettes</h1>
            <div>
                <Link className='link'to="/summerwarmtone"><button className="Summerwarmtone">Warm Tone</button></Link>
                <Link className='link'to="/summercoldtone"><button className="Summercoldtone">Cold Tone</button></Link>
            </div>
        </main>
    )
}

export default Summer