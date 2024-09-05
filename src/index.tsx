import React from "react";
import ReactDOM from "react-dom";
import App from "./views/Popup/App";
import DevelopmentApp from "./local-dev/DevelopmentApp";

const isProduction = process.env.NODE_ENV === "production";

ReactDOM.render(
  <React.StrictMode>
    {isProduction ? <App /> : <DevelopmentApp /> }
  </React.StrictMode>,
  document.getElementById("root")
);
