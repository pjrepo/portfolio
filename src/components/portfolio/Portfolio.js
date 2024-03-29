import React from "react";
import "./Portfolio.css";
import snakegame from "../../assets/snakegame.webp";
import tictactoe from "../../assets/tictactoe.webp";
import cryptotracker from "../../assets/cryptotracker.webp";
import admindashboard from "../../assets/admindashboard.webp";
import colorpicker from "../../assets/colorpicker.webp";
import taskmanager from "../../assets/taskmanager.webp";
import cocktailsapi from "../../assets/cocktailsapi.webp";
import quizapp from "../../assets/quizapp.webp";
import expensetracker from "../../assets/expensetracker.webp";
import portfoliowebsite from "../../assets/portfoliowebsite.webp";

const projects = [
  {
    i: 1,
    image: colorpicker,
    title: "COLOR PICKER EXTENSION",
    description: [
      { j: "1", technology: "Manifest_V3" },
      { j: "2", technology: "Javascript" },
    ],
    sourceCode: "https://github.com/pjrepo/color-picker-extension",
  },
  {
    i: 2,
    image: tictactoe,
    title: "TIC TAC TOE",
    description: [{ j: "1", technology: "React Js" }],
    liveLink: "https://tic-tac-toe-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/tic-tac-toe",
  },
  {
    i: 3,
    image: cocktailsapi,
    title: "COCKTAILS API",
    description: [{ j: "1", technology: "React Js" }],
    liveLink: "https://cocktails-api-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/cocktails",
  },
  {
    i: 4,
    image: admindashboard,
    title: "ADMIN DASHBOARD",
    description: [{ j: "1", technology: "React Js" }],
    liveLink: "https://admin-dashboard-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/admin-dashboard",
  },
  {
    i: 5,
    image: snakegame,
    title: "RETRO SNAKE GAME",
    description: [
      { j: "1", technology: "TypeScript" },
      { j: "2", technology: "React Js" },
    ],
    liveLink: "https://retro-snake-game-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/retro-snake-game",
  },
  {
    i: 6,
    image: cryptotracker,
    title: "CRYPTOCURRENCY TRACKER",
    description: [
      { j: "1", technology: "React Js" },
      { j: "2", technology: "Material UI" },
    ],
    liveLink: "https://cryptix-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/cryptix",
  },
  {
    i: 7,
    image: quizapp,
    title: "QUIZ APP",
    description: [{ j: "1", technology: "React Js" }],
    liveLink: "https://quiz-app-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/quiz-app",
  },
  {
    i: 8,
    image: portfoliowebsite,
    title: "PORTFOLIO WEBSITE",
    description: [{ j: "1", technology: "React Js" }],
    liveLink: "https://cryptix-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/portfolio",
  },
  {
    i: 9,
    image: expensetracker,
    title: "EXPENSE TRACKER",
    description: [
      { j: "1", technology: "Node Js" },
      { j: "2", technology: "React Js" },
      { j: "3", technology: "Mongo DB" },
    ],
    liveLink: "",
    sourceCode: "https://github.com/pjrepo/expense-tracker",
  },
  {
    i: 10,
    image: taskmanager,
    title: "TASK MANAGER",
    description: [
      { j: "1", technology: "Next Js" },
      { j: "2", technology: "Firebase" },
      { j: "3", technology: "Mongo DB" },
    ],
    liveLink: "https://tm-next-firebase-mongo-pjrepo.vercel.app/",
    sourceCode: "https://github.com/pjrepo/tm-next-firebase-mongo",
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
                  <p>
                    {description.map((skill) => {
                      const { j, technology } = skill;
                      return (
                        <span key={j}>
                          #<b>{technology}</b>&nbsp; &nbsp;
                        </span>
                      );
                    })}
                  </p>
                  <div className="portfolio__item-cta">
                    {title !== "COLOR PICKER EXTENSION" &&
                      title !== "PORTFOLIO WEBSITE" && (
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
