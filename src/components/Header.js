import React from "react";
import Logo from "./Logo";
import { ReactComponent as Cloud } from "../styles/svg/cloud.svg";
const Header = () => {
  return (
    <div className="header">
      <Cloud />
      <Logo />
    </div>
  );
};

export default Header;
