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
    description: "#Manifest_V3 #Javascript",
    sourceCode: "https://github.com/pjrepo/color-picker-extension",
  },
  {
    i: 2,
    image: tictactoe,
    title: "TIC TAC TOE",
    description: "#React",
    liveLink: "https://tic-tac-toe-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/tic-tac-toe",
  },
  {
    i: 3,
    image: cocktailsapi,
    title: "COCKTAILs API",
    description: "#React",
    liveLink: "https://cocktails-api-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/cocktails",
  },
  {
    i: 4,
    image: admindashboard,
    title: "Admin Dashboard",
    description: "#React",
    liveLink: "https://admin-dashboard-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/admin-dashboard",
  },
  {
    i: 5,
    image: snakegame,
    title: "RETRO SNAKE GAME",
    description: "#Typescript #React",
    liveLink: "https://retro-snake-game-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/retro-snake-game",
  },
  {
    i: 6,
    image: sortingvisualizer,
    title: "SORTING VISUALIZER",
    description: "#Algorithms #React",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 7,
    image: cryptotracker,
    title: "Cryptocurrency Tracker",
    description: "#React #Material UI",
    liveLink: "https://cryptix-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/cryptix",
  },
  {
    i: 8,
    image: taskmanager,
    title: "TASK MANAGER",
    description: "#Node #React #Mongo DB",
    liveLink: "https://dribbble.com/Alien_pixels",
    sourceCode: "https://github.com",
  },
  {
    i: 9,
    image: expensetracker,
    title: "EXPENSE TRACKER",
    description: "#Node #React #Mongo DB",
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
