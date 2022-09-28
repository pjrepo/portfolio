import React from "react";
import "./Header.css";
import CV from "../../assets/Pavan Jegurupati resume.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const greeting = "Hi there 👋, I'm";
const name = "Pavan Jegurupati";
const intro = "A software developer with passion for learning and creating";

const items = [
  { i: 1, link: "https://linkedin.com", icon: <BsLinkedin /> },
  { i: 2, link: "https://github.com", icon: <BsGithub /> },
];

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className="text-light">{greeting}</h5>
        <h1>{name}</h1>
        <h3>{intro}</h3>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
        </div>
        <div className="header__socials">
          {items.map((item) => {
            const { i, link, icon } = item;
            return (
              <div
                className="link"
                key={i}
                onClick={() => window.open(link, "_blank")}
              >
                {icon}
              </div>
            );
          })}
        </div>
        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
