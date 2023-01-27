import React from "react";
import ReactDOM from "react-dom";
import { VehicleList } from "@components";
import "./global-styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <VehicleList />
  </React.StrictMode>,
  document.querySelector(".root")
);
