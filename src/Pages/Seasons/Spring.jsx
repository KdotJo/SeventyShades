import "./Seasons.css";
import Navbar from "../../Components/Navbar";

function Spring() {
  
    return (
    <>
      <div><Navbar></Navbar></div>
        <h1>Spring Shades</h1>
          <main>
              <a className="swarmtone" href="/springwarmtone" ><button>Warm Tone</button></a>
              <a className="scoldtone" href="/springcoldtone" ><button>Cool Tone</button></a>
          </main>
    </>
  );
}

export default Spring;