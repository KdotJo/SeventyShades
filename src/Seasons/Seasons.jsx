//<a className="scoldtone" href="/springcoldtone" >
//<a className="swarmtone" href="/springwarmtone" >
import "./Seasons.css"
import React from "react";
import { Link } from "react-router-dom";


function Seasons() {
  
    return (
    <main>
      <h1 className="seasons-header">Which Season Would You Like?</h1>
      <div className="catagory">
        <Link className='link' to="/spring"><button className="seasons-spring">Spring</button></Link>
        <Link className='link' to="/summer"><button className="seasons-summer">Summer</button></Link>
        <Link className='link' to="/fall"><button className="seasons-fall">Fall</button></Link>
        <Link className='link' to="/winter"><button className="seasons-winter">Winter</button></Link>
      </div>
    </main>
  );
}

export default Seasons;