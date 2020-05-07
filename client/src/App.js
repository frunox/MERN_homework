// import node package react, which defines UI components
import React from "react";
// import BrowserRoute (w/ alias Router), Route and Switch functionality from react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Make Home, Saved and NoMatch pages available to render below
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
// import the Nav component to render below
import Nav from "./components/Nav";

// this is the default starting point for the app
function App() {
  // render the landing page
  return (
    // wrap landing page elements with routing functionality
    <Router>
      {/* all elements must be wrapped in a <div> */}
      <div>
        {/* render the Nav component */}
        <Nav />
        {/* Switch wraps calls to various routes */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// export this function to index.js
export default App;
