import React from "react";
import ReactDOM from "react-dom";

import Small from "./Small";
import XSSmall from "./XsSmall";
import Normal from "./Normal";

const rootElement = document.getElementById("root");
// ReactDOM.render(<Normal />, rootElement);
ReactDOM.render(<Small />, rootElement);
// ReactDOM.render(<XSSmall />, rootElement);
