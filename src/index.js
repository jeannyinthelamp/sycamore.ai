import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  // If web-browser back and forward navigation buttons break, replace BrowserRouter with HashRouter. This will occur if using Github pages as temporary live demo for this application.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
