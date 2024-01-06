import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* We have imported BrowserRouter */}
    <BrowserRouter>
      {/*  We have imported App folder */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
