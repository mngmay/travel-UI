import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu footerDiv">
      <h3>Menu</h3>
      <ul>
        <NavLink to="/" className="navLink">
          Dashboard
        </NavLink>
        <NavLink to="/About" className="navLink">
          About Trip Hop
        </NavLink>
        <NavLink to="/Resources" className="navLink">
          Recommended Resources
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
