import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/snakegame.webp";
import IMG2 from "../../assets/tictactoe.webp";
import IMG3 from "../../assets/cryptotracker.webp";
import IMG4 from "../../assets/admindashboard.webp";
import IMG5 from "../../assets/colorpicker.webp";
import IMG6 from "../../assets/todo.webp";
import IMG7 from "../../assets/cocktailsapi.webp";
import IMG8 from "../../assets/sortingvisualizer.webp";

const projects = [
  {
    i: 1,
    image: IMG1,
    title: "RETRO SNAKE GAME",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 2,
    image: IMG2,
    title: "TIC TAC TOE",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 3,
    image: IMG3,
    title: "Cryptocurrency Tracker",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 4,
    image: IMG4,
    title: "Admin Dashboard",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 5,
    image: IMG5,
    title: "COLOR PICKER",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 6,
    image: IMG6,
    title: "TODO APP",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 7,
    image: IMG7,
    title: "COCKTAILs API",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 8,
    image: IMG8,
    title: "SORTING VISUALIZER",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {projects.map((item) => {
          const { i, image, title, description, liveLink, sourceCode } = item;
          return (
            <article key={i} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="portfolio__item-cta">
                  <div
                    className="btn btn-primary"
                    onClick={() => window.open(liveLink, "_blank")}
                  >
                    view
                  </div>
                  <div
                    className="btn"
                    onClick={() => window.open(sourceCode, "_blank")}
                  >
                    code
                  </div>
                  {/* <a
                    href={liveLink}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    view
                  </a> */}
                  {/* <a href={sourceCode} className="btn" target="_blank">
                    code
                  </a> */}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
