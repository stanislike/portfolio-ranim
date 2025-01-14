import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="contact">
          <div className="phone-section">
            <FontAwesomeIcon icon={["fas", "phone"]} />
            <p>+33 6 03 50 11 75</p>
          </div>
          <div className="mail-section">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
            <NavLink to="mailto:ranimahmed@outlook.fr">
              ranimahmed@outlook.fr
            </NavLink>
          </div>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <NavLink
                to="https://www.linkedin.com/in/ranim-ahmed-8757212a4/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
