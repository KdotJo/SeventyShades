
import spring from "./images/Spring.jpg";
import summer from "./images/Summer.jpg";
import fall from "./images/Fall.jpg";
import winter from "./images/Winter.jpg";
import Spring from "./Pages/Spring";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/index.jsx"
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      
      
        <main>
        <div>Select Your Personal Season</div>
        <img className="Spring" placeholder="Spring" src={spring} alt="Spring_Img" width="90" height="120"/>
        <img className="Summer" placeholder="Summer" src={summer} alt="Summer_Img" width="90" height="120"/>
        <img className="Fall" placeholder="Fall" src={fall} alt="Fall_Img" width="90" height="120"/>
        <img className="Winter" placeholder="Winter" src={winter} alt="Winter_Img" width="90" height="120"/>
        </main>
    </>
  );
}

export default App;
