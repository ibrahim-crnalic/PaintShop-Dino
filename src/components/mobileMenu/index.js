import React from "react";
import Logo from "../../assets/images/logo.svg";
import Close from "../../assets/icons/close.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function MobileMenu(props) {
  const navigate = useNavigate();

  return (
    <div className="mobileMenu-wrapper">
      <div className="menu-head">
        <div className="logo">
          <img
            src={Logo}
            onClick={() => {
              navigate("/");
            }}
            alt="navbar-logo"
          />
        </div>
        <div className="close">
          <img src={Close} alt="close-icon" onClick={props.close} />
        </div>
      </div>
      <div className="menu-body">
        <NavLink to="/" className="link" onClick={props.close}>
          POČETNA
        </NavLink>
        <NavLink to="/about" className="link" onClick={props.close}>
          O NAMA
        </NavLink>
        <NavLink to="/services" className="link" onClick={props.close}>
          USLUGE
        </NavLink>
        <NavLink to="/gallery" className="link" onClick={props.close}>
          GALERIJA
        </NavLink>
      </div>
    </div>
  );
}
