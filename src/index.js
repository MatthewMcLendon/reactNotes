import React from "react";
import ReactDOM from "react-dom/client";
// routes
import { BrowserRouter } from "react-router-dom";
// app
import App from "./App";
// style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
