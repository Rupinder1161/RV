import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Mern from "./Mern";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Mern />, document.getElementById("root"));


serviceWorker.unregister();
