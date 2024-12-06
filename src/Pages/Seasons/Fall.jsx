import "./Seasons.css"
import Navbar from "../../Components/Navbar";
import "./Fall.css"

function Fall() {
    return (
        <>
        <div><Navbar></Navbar></div>
        <h1>
        Fall Shades
        </h1>  
            <main>
                <a className="fwarmtone" href="/fallwarmtone" ><button>Warm Tone</button></a>
                <a className="fcoldtone" href="/fallcoldtone" ><button>Cool Tone</button></a>
            </main>
        </>
    )
}

export default Fall;