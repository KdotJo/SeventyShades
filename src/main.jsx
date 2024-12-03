import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './App.css'
import App from "./App.jsx";
import About from "./Pages/Aboutus/about_us.jsx";
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
