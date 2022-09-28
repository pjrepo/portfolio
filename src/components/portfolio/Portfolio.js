import React from "react";
import "./Portfolio.css";
import snakegame from "../../assets/snakegame.webp";
import tictactoe from "../../assets/tictactoe.webp";
import cryptotracker from "../../assets/cryptotracker.webp";
import admindashboard from "../../assets/admindashboard.webp";
import colorpicker from "../../assets/colorpicker.webp";
import taskmanager from "../../assets/taskmanager.webp";
import cocktailsapi from "../../assets/cocktailsapi.webp";
import sortingvisualizer from "../../assets/sortingvisualizer.webp";
import expensetracker from "../../assets/expensetracker.webp";

const projects = [
  {
    i: 1,
    image: colorpicker,
    title: "COLOR PICKER EXTENSION",
    description: "Project description",
    sourceCode: "https://github.com",
  },
  {
    i: 2,
    image: tictactoe,
    title: "TIC TAC TOE",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 3,
    image: cocktailsapi,
    title: "COCKTAILs API",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 4,
    image: admindashboard,
    title: "Admin Dashboard",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 5,
    image: snakegame,
    title: "RETRO SNAKE GAME",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 6,
    image: sortingvisualizer,
    title: "SORTING VISUALIZER",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 7,
    image: cryptotracker,
    title: "Cryptocurrency Tracker",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 8,
    image: taskmanager,
    title: "TASK MANAGER",
    description: "Project description",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 9,
    image: expensetracker,
    title: "EXPENSE TRACKER",
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
        {projects
          .sort((a, b) => b.i - a.i)
          .map((item) => {
            const { i, image, title, description, liveLink, sourceCode } = item;
            return (
              <article key={i} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="portfolio__item-cta">
                    {title !== "COLOR PICKER EXTENSION" && (
                      <div
                        className="btn btn-primary"
                        onClick={() => window.open(liveLink, "_blank")}
                      >
                        view
                      </div>
                    )}
                    <div
                      className="btn"
                      onClick={() => window.open(sourceCode, "_blank")}
                    >
                      code
                    </div>
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
