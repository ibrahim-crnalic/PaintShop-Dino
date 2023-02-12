import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import Menu from "../../assets/icons/menu.png";
import MobileMenu from "../mobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={Logo} alt="navbar-logo" />
        </div>
        <div className="navbar-link">
          <NavLink to="/" className="link">
            POČETNA
          </NavLink>
          <NavLink to="/about" className="link">
            O NAMA
          </NavLink>
          <NavLink to="/services" className="link">
            USLUGE
          </NavLink>
          <NavLink to="/gallery" className="link">
            GALERIJA
          </NavLink>
        </div>
      </div>
      <div className={open ? "navNone" : "navContent"}>
        <div className="navbar-logo">
          <img src={Logo} alt="navbar-logo" />
        </div>
        <div className="navbar-burger">
          <img
            className="menu-icon"
            src={Menu}
            alt="menu-icon"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {open && (
        <>
          <MobileMenu close={toggleMobileMenu} />
        </>
      )}
    </>
  );
}
