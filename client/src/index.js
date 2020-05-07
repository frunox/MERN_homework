// import node package react, which defines UI components 
import React from "react";
// react-dom provides the render method and defines the entry point for DOM manipulation
import ReactDOM from "react-dom";
// import the App component, which is the root (parent) of all other components.
import App from "./App";
// create a service worker, which caches data locally to speed loading and allow off-line operation
import registerServiceWorker from "./registerServiceWorker";

// Rendering will,by default, use the ./public/index.html file, starting at the element with id="root"
ReactDOM.render(<App />, document.getElementById("root"));

// make the service worker work on the client side
registerServiceWorker();
