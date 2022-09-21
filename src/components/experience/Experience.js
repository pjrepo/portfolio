import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const skillSet = [
  {
    i: 1,
    heading: "Frontend Development",
    style: "frontend",
    skills: [
      { j: 1, technology: "HTML", level: "Advanced" },
      { j: 2, technology: "CSS", level: "Intermediate" },
      { j: 3, technology: "Javascript", level: "Advanced" },
      { j: 4, technology: "React Js", level: "Advanced" },
      { j: 5, technology: "Next Js", level: "Intermediate" },
      { j: 6, technology: "Redux", level: "Intermediate" },
      { j: 7, technology: "Typescript", level: "Beginner" },
    ],
  },
  {
    i: 2,
    heading: "Backend Development",
    style: "backend",
    skills: [
      { j: 1, technology: "Node Js", level: "Intermediate" },
      { j: 2, technology: "Mongo DB", level: "Intermediate" },
      { j: 3, technology: "PostgreSQL", level: "Beginner" },
    ],
  },
  {
    i: 3,
    heading: "Other Skills",
    style: "other",
    skills: [
      { j: 1, technology: "C++", level: "Advanced" },
      { j: 2, technology: "OOP", level: "Intermediate" },
      { j: 3, technology: "Algorithms", level: "Advanced" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I can do?</h5>
      <h2>My SKills</h2>
      <div className="container experience__container">
        {skillSet.map((type) => {
          const { i, heading, style, skills } = type;
          return (
            <div key={i} className={`experience__${style}`}>
              <h3>{heading}</h3>
              <div className="experience__content">
                {skills.map((skill) => {
                  const { j, technology, level } = skill;
                  return (
                    <article key={j} className="experience__details">
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div className="skill__level">
                        <h4>{technology}</h4>
                        <small className="text-light">{level}</small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
