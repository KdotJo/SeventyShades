import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './App.css'
import App from "./App.jsx";
import About from "./Pages/main/about_us.jsx";
import Spring from "./Pages/Seasons/Spring.jsx";
import Summer from "./Pages/Seasons/Summer.jsx";
import Fall from "./Pages/Seasons/Fall.jsx";
import Winter from "./Pages/Seasons/Winter.jsx";
import Login from "./Pages/main/LoginForm.jsx";
import Signup from "./Pages/main/Signup.jsx"
import FallCold from "./Pages/Seasons/FallCold.jsx";
import FallWarm from "./Pages/Seasons/FallWarm.jsx";
import SpringCold from "./Pages/Seasons/SpringCold.jsx";
import SpringWarm from "./Pages/Seasons/SpringWarm.jsx";


import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "aboutus",
    element: <About/>,
  },
  {
    path: "spring",
    element: <Spring/>,
  },
  {
    path: "summer",
    element: <Summer/>,
  },
  {
    path: "fall",
    element: <Fall/>,
  },
  {
    path: "winter",
    element: <Winter/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signup",
    element: <Signup/>
  }
  ,
  {
    path: "fallwarmtone",
    element: <FallWarm/>
  },
  {
    path: "fallcoldtone",
    element: <FallCold/>
  },
  {
    path: "springcoldtone",
    element: <SpringCold/>
  },
  {
    path: "springwarmtone",
    element: <SpringWarm/>
  }

  
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
