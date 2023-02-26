import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Menu from "../../assets/icons/menu.png";
import MobileMenu from "../mobileMenu";
import disableScroll from "disable-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [open]);
  const navigate = useNavigate();
  
  const prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar-wrapper").style.top = "0";
  } else if (currentScrollPos == 0) {
    document.querySelector(".navbar-wrapper").style.top = "0";
  } else {
    document.querySelector(".navbar-wrapper").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
  return (
    <>
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img
            src={Logo}
            onClick={() => {
              navigate("/");
            }}
            alt="navbar-logo"
          />
        </div>
        <div className="navbar-link">
          <NavLink to="/" className="link">
            POČETNA
          </NavLink>
          <NavHashLink to="/#about" className="link">
            O NAMA
          </NavHashLink>
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
