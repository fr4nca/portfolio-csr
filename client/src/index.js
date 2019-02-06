import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("scroll", () => {
  if (window.scrollY > 240) {
    document.querySelector("#navbar").style.background = "rgba(31, 31, 31, 1)";
  } else {
    document.querySelector("#navbar").style.background = "rgba(31, 31, 31, 0)";
  }
});
