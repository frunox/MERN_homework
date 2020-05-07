// create the functional component Jumbotron, a Bootstrap element
import React from "react";
import "./style.css";

// the props (children) are provided from /pages/Home.js, NoMatch.js, and Saved.js
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
