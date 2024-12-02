import { useState } from "react";
import spring from "./images/Spring.jpg";
import summer from "./images/Summer.jpg";
import fall from "./images/Fall.jpg";
import winter from "./images/Winter.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Seventy Shades</h1>
      <main>
        <div>Select Your Personal Season</div>
        <nav>Hello</nav>
        <img
          className="Spring"
          placeholder="Spring"
          src={spring}
          alt="Spring_Img"
          width="90"
          height="120"
        />
        <img
          className="Summer"
          placeholder="Summer"
          src={summer}
          alt="Summer_Img"
          width="90"
          height="120"
        />
        <img
          className="Fall"
          placeholder="Fall"
          src={fall}
          alt="Fall_Img"
          width="90"
          height="120"
        />
        <img
          className="Winter"
          placeholder="Winter"
          src={winter}
          alt="Winter_Img"
          width="90"
          height="120"
        />

        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
