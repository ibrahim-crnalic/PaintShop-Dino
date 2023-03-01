import React from "react";
import Logo from "../../assets/images/logo.png";
import Close from "../../assets/icons/close.png";
import { NavLink, useNavigate } from "react-router-dom";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";

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
        <NavLink to="/#about" className="link" onClick={props.close}>
          O NAMA
        </NavLink>
        <NavLink to="/services" className="link" onClick={props.close}>
          USLUGE
        </NavLink>
        <NavLink to="/gallery" className="link" onClick={props.close}>
          GALERIJA
        </NavLink>
      </div>
      <div className="mobileMenu-icons">
        <a href="https://www.instagram.com/paintshopdino/">
          <img src={Instagram} alt="instagram-icon" className="social-icon"/>
        </a>
        <a href="https://m.facebook.com/people/Paintshop-Dino/100074982594299/?comment_id=Y29tbWVudDozMjI3Njk3ODAwMTA5NTJfMzIyNzgwNDUwMDA5ODg1">
          <img src={Facebook} alt="facebook-icon" className="social-icon-1" />
        </a>
      </div>
    </div>
  );
}
