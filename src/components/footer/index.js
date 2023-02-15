import React from "react";
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img src={Logo} alt="logo-image"/>
        <p>Efikasno i pouzdano rješenje za sve vrste oštećenja na vašem vozilu - vaš partner za autolimariju i lakiranje.</p>

      </div>
      <div className="footer-information"></div>
      <div className="footer-workingHours"></div>
    </div>
  );
}
