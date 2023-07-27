import { NavLink } from "react-router-dom";
import century from "../../assets/images/century.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="left-links">
        <ul>
          <li>
            <NavLink
              exact="true"
              activeclassName="active"
              className="link-btn"
              to="/"
            >
              {" "}
              ABOUT{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassName="active"
              className="link-btn"
              to="/buy"
            >
              {" "}
              CAREERS{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassName="active"
              className="link-btn"
              to="/sell"
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassName="active"
              className="link-btn"
              to="/about"
            >
              PLACEHOLDER
            </NavLink>
          </li>
          <li>
            <NavLink
              exact="true"
              activeclassName="active"
              className="link-btn"
              to="/social"
            >
              SOMETHING
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="copyright-tag">
        <img className="century-img" alt="" src={century} />
      Copyright © 2023 Century 21, LLC
         </div>

      <div className="right-icons">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jeff-walker-jeffreyrwalker/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/jeff.walker.9083477"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/jeffatxrealtor/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>

    </footer>


  );
}
