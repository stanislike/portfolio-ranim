import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="input-email">
          <input
            type="text"
            name="Enter your email"
            placeholder="Entrer votre email"
          />
          <input type="submit" value={"Envoyer"} />
        </div>
        <div className="contact">
          <div className="phone-section">
            <div className="call-icon"></div>
            <NavLink to="/">Appeler +33 6 03 50 11 75</NavLink>
          </div>
          <div className="mail-section">
            <div className="mail-icon"></div>
            <NavLink to="mailto:ranimahmed@outlook.fr">
              ranimahmed@outlook.fr
            </NavLink>
          </div>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <NavLink to="https://www.facebook.com/" target="_blank">
                <div className="fb-icon"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://x.com/" target="_blank">
                <div className="twitter-icon"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://fr.linkedin.com/" target="_blank">
                <div className="linkedin-icon"></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.instagram.com/" target="_blank">
                <div className="instagram-icon"></div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
