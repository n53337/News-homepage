import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
  </React.StrictMode>
);
