import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navigate } from "react-router-dom";

function App() {
  if (GoToFall) {
    return <Navigate to="/fall" />;
  }
  return (
    <>
      <h1>Seventy Shades</h1>
      <main>
        <body>
          <div>Select Your Personal Season</div>
          <nav>
            <a href="./Pages/spring.html">
              {" "}
              <button>Spring</button>
            </a>
            <a href="./Pages/summer.html">
              {" "}
              <button>Summer</button>
            </a>
            <a href="./Pagesfall.html">
              {" "}
              <button
                onClick={() => {
                  setGoToFall(true);
                }}
              >
                Fall
              </button>
            </a>
            <a href="./Pages/winter.html">
              {" "}
              <button>Winter</button>
            </a>
          </nav>
          <img
            class="Spring"
            src="./images/Spring.jpg"
            placeholder="Spring"
            alt="./Spring_Img"
            width="90"
            height="120"
          ></img>
          <img
            class="Summer"
            src="./images/Summer.jpg"
            placeholder="Summer"
            alt="Spring_Img"
            width="90"
            height="120"
          ></img>
          <img
            class="Fall"
            src="./images/Fall.jpg"
            placeholder="Fall"
            alt="Spring_Img"
            width="90"
            height="120"
          ></img>
          <img
            class="Winter"
            src="./images/Winter.jpg"
            placeholder="Winter"
            alt="Spring_Img"
            width="90"
            height="120"
          ></img>
        </body>
      </main>
      <div>
        <a href="./Pages/login.html">
          {" "}
          <button>LOGIN</button>
        </a>
      </div>
      <footer>All of Your Seasonal Colors in One Place</footer>
      <div>
        <a
          style="width: 50%; float:center; margin: .5pc;"
          class="LINKS"
          href="https://github.com/KdotJo/SeventyShades"
        >
          Github
        </a>
        <a
          style="width: 50%; float:center; margin: .5pc;"
          class="WEBSOCKET"
          href="./Pages/WebSocket.html"
        >
          {" "}
          Websocket
        </a>
        <a
          style="width: 50%; float:center; margin: .5pc;"
          class="DB"
          href="./Pages/DB.html"
        >
          {" "}
          Database
        </a>
        <a
          style="width: 50%; float:center; margin: .5pc;"
          class="ABTUS"
          href="./Pages/About_us.html"
        >
          {" "}
          About Us
        </a>
      </div>
    </>
  );
}

export default App;
