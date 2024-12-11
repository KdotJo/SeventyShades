import React from "react";
import './winter.css'
import { Link } from "react-router-dom";

function Winter () {
    return (
        <main>
            <h1>Winter Color Palettes</h1>
            <div>
                <Link className='link'to="/winterwarmtone"><button className="Winterwarmtone">Warm Tone</button></Link>
                <Link classNAme='link'to="/wintercoldtone"><button className="Wintercoldtone">Cold Tone</button></Link>
            </div>
        </main>
    )
}

export default Winter