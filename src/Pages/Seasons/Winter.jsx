import "./Seasons.css";
import "./Winter.css"
import Navbar from "../../Components/Navbar";

function Winter() {
  
    return (
    <>
      <div><Navbar></Navbar></div>
        <h1>Summer Shades</h1>
          <main>
              <a className="winterwarmtone" href="/winterwarmtone" ><button>Warm Tone</button></a>
              <a className="wintercoldtone" href="/wintercoldtone" ><button>Cool Tone</button></a>
          </main>
    </>
  );
}

export default Winter;