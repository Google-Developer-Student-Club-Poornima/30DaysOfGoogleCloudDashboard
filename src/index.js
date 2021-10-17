import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
