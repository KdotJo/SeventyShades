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
      <div>
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
          src={summer}
          placeholder="Summer"
          alt="Summer_Img"
          width="90"
          height="120"
        />
        <img
          className="Fall"
          src={fall}
          placeholder="Fall"
          alt="Fall_Img"
          width="90"
          height="120"
        />
        <img
          className="Winter"
          src={winter}
          placeholder="Winter"
          alt="Winter_Img"
          width="90"
          height="120"
        />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
