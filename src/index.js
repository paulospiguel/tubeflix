import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);