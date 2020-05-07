// this file defines a constant List, and a functional component ListItem
import React from "react";
import "./style.css";

// This component exports both the List and ListItem components
// list is a JSX definition of a Bootstrap div to style the list of books
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

// component ListItem is used in component Book to provide Bootstrap styling to the list of books
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
