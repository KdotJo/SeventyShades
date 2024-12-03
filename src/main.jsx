import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './App.css'
import App from "./App.jsx";
import Testing from "./Pages/Testing.jsx"
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "blog",
    element: <Testing/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
