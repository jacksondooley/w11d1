import React from "react";
import ReactDOM from "react-dom";
import Game from './components/game';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // const hello = React.createElement("h1", null, ["hello from react"]);
    // const hello = <h1>Hello from react</h1>; 

  ReactDOM.render(<Game/>, root);
});