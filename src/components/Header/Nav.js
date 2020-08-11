import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
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
    </nav>
  );
};

export default Nav;
