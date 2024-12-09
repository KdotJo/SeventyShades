import Navbar from "./Components/Navbar/index.jsx";
import "./App.css";
import img1 from "./images/Home_Page/Home_img1.jpg"
import img2 from "./images/Home_Page/Home_img2.jpg"
import img3 from "./images/Home_Page/Home_img3.jpg"
import img4 from "./images/Home_Page/Home_img4.jpg"
import img5 from "./images/Home_Page/Home_img5.jpg"
import img6 from "./images/Home_Page/Home_img6.jpg"


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Welcome To Seventy Shades</h1>
      </div>
      <div>
            <img src={img1} alt="img1" className="img1"/>
            <img src={img2} alt="img2" className="img2"/>
            <img src={img3} alt="img3" className="img3"/>
            <img src={img4} alt="img4" className="img4"/>
            <img src={img5} alt="img5" className="img5"/>
            <img src={img6} alt="img6" className="img6"/>
      </div>
    </div>
  );
}

export default App;