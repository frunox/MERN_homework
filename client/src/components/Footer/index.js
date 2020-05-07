// this is the code for defining the functional component Footer
// import react package
import React from "react";

// no props are passed to the function defining Footer
function Footer() {
  return (
    <footer>
      <hr />
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

export default Footer;
