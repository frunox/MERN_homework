// This file has the code to define a Card functional component
// import the React package
import React from "react";

// define the Card component
// props are destructured as arguments to the function, as defined in /pages/Home.js
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
