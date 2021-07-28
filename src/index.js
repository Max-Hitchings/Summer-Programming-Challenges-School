import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./router";
import BodyClassName from "react-body-classname";
// import { jsx } from "@emotion/react";

let sectionStyle = process.env.PUBLIC_URL + `/GREGGER.gif`;

ReactDOM.render(
  <React.StrictMode>
    <BodyClassName
      css={{
        backgroundImage: `url("${sectionStyle}")`,
      }}
    >
      <header className="App-header">
        <p>OKAY BUDDY </p>
        <p>GREGGER follow these steps</p>
        <p>1. Get off your ass</p>
        <p>2. walk down the stairs</p>
        <p>3. go to the kitchen</p>
        <p>4. find a knife</p>
        <p>5. find DADDY GREGGER</p>
        <p>6. ask DADDY GREGGER to leave at midnight</p>
        <p>
          6b. if DADDY GREGGER says no stab DADDY GREGGER and leave at midnight
        </p>
        <p>6c. if DADDY GREGGER says yes leave at midnight</p>
      </header>
    </BodyClassName>
  </React.StrictMode>,
  document.getElementById("root")
);
