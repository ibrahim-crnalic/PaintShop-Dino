import React from "react";
import Logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <img src={Logo} alt="navbar-logo" />
      </div>
      <div className="navbar-link">
        <NavLink to="/" className="link">
          HOME
        </NavLink>
      </div>
    </div>
  );
}
