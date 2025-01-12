import React from "react";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_section">
      <Navigation />
      <div className="banner-section">
        <h1>Ranim Ahmed</h1>
        <h2>Chef de projet e-commerce</h2>
        <h2>UX/UI Design</h2>
        <NavLink to="/">
          <li>CV</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
