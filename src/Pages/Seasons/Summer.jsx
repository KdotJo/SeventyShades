import "./Seasons.css";
import Navbar from "../../Components/Navbar";

function Summer() {
  
    return (
    <>
      <div><Navbar></Navbar></div>
        <h1>Summer Shades</h1>
          <main>
              <a className="sumwarmtone" href="/summerwarmtone" ><button>Warm Tone</button></a>
              <a className="sumcoldtone" href="/summercoldtone" ><button>Cool Tone</button></a>
          </main>
    </>
  );
}

export default Summer;