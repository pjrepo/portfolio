import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const name = "Pavan Jegurupati";

const items = [
  { i: 1, page: "#", detail: "Home" },
  { i: 2, page: "#about", detail: "About" },
  { i: 3, page: "#experience", detail: "Experience" },
  { i: 4, page: "#portfolio", detail: "Portfolio" },
  { i: 5, page: "#contact", detail: "Contact" },
];

const socials = [
  { i: 1, link: "https://facebook.com", icon: <FaFacebookF /> },
  { i: 2, link: "https://instagram.com", icon: <FiInstagram /> },
  { i: 3, link: "https://twitter.com", icon: <IoLogoTwitter /> },
];

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {name}
      </a>
      <ul className="permalinks">
        {items.map((item) => {
          const { i, page, detail } = item;
          return (
            <li key={i}>
              <a href={page}>{detail}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        {socials.map((social) => {
          const { i, link, icon } = social;
          return (
            <a key={i} href={link} target="_blank">
              {icon}
            </a>
          );
        })}
      </div>
      <div className="footer__copyright">
        <small>&copy; {name}</small>
      </div>
    </footer>
  );
};

export default Footer;
