import React from "react";
import Logo from "../Logo";
import Menu from "./Menu";
import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <div className="footerInfo">
        <Contact />
        <Menu />
      </div>
    </div>
  );
};

export default Footer;
