import React from "react";
import Logo from "../../assets/images/logo.png";
import Location from "../../assets/icons/location.svg";
import Call from "../../assets/icons/call.svg";
import Email from "../../assets/icons/email.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import ScrollToTop from "react-scroll-to-top";


export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img src={Logo} alt="logo-image" />
        <p>
          Efikasno i pouzdano rješenje za sve vrste oštećenja na vašem vozilu -
          vaš partner za autolimariju i lakiranje.
        </p>
        <p className="coppy-rights">© Paintshop by Dino 2023. All rights reserved.</p>
      </div>
      <div className="footer-information">
        <a className="information" href="tel:+38762346729">
          <img className="info-img" src={Call} alt="phone-icon" />
          <p>+38762346729</p>
        </a>
        <a className="information" href="mailto:bojicdino27@gmail.com">
          <img className="info-img" src={Email} alt="email-icon" />
          <p>bojicdino27@gmail.com</p>
        </a>
        <a
          className="information"
          href="https://www.google.com/maps/place/Paintshop+Dino/@43.8570165,18.3234022,15z/data=!4m6!3m5!1s0x4758cb82109f65c1:0x1ff60b8e8883cb96!8m2!3d43.8570165!4d18.3234022!16s%2Fg%2F11f5hf97w8"
        >
          <img className="info-img" src={Location} alt="location-icon" />
          <p>Safeta Zajke 310</p>
        </a>
        <div className="social-media">
          <a href="https://www.instagram.com/paintshopdino/">
            <img src={Instagram} alt="instagram-icon" className="social-icon" />
          </a>
          <a href="https://m.facebook.com/people/Paintshop-Dino/100074982594299/?comment_id=Y29tbWVudDozMjI3Njk3ODAwMTA5NTJfMzIyNzgwNDUwMDA5ODg1">
            <img src={Facebook} alt="facebook-icon"  className="social-icon-1"/>
          </a>
        </div>
      </div>
      <div className="footer-workingHours">
        <h1>Radno vrijeme</h1>
        <div className="working-hours">
          <div className="working-days">
            <p className="days-title">Ponedjeljak</p>
            <p className="opening-hours">08:00 - 17:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Utorak</p>
            <p className="opening-hours">08:00 - 17:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Srijeda</p>
            <p className="opening-hours">08:00 - 17:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Četvrtak</p>
            <p className="opening-hours">08:00 - 17:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Petak</p>
            <p className="opening-hours">08:00 - 17:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Subota</p>
            <p className="opening-hours">08:00 - 12:00</p>
          </div>
          <div className="working-days">
            <p className="days-title">Nedjelja</p>
            <p className="opening-hours">Zatvoreno</p>
            <ScrollToTop smooth />
          </div>
        </div>
      </div>
      <p className="coppy-rights-mobile">© Paintshop by Dino 2023. All rights reserved.</p>
    </div>
  );
}
