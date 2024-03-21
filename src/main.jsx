import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Accordian from "./components/accordian/index.jsx";
import RandomColor from "./components/random-color/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Accordian Component */}
    {/* <Accordian /> */}
    {/* Random Color Component */}
    <RandomColor />
  </React.StrictMode>
);
