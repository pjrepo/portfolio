import React from "react";
import "./About.css";
import MYIMAGE from "../../assets/MYIMAGE.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Let's know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MYIMAGE} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Hi, I'm Pavan, an Electrical Engineering graduate from{" "}
            <b style={{ color: "white" }}>NIT Warangal</b> (2016-2020) living in
            Visakhapatnam. I'm a{" "}
            <b style={{ color: "white" }}>Full Stack developer</b> with a focus
            on the <b style={{ color: "white" }}>MERN stack</b>, but still
            exploring other technologies and the frameworks that catch my
            interest!
          </p>
          <p>
              I am a skilled Software Engineer with a strong foundation in web development, specializing in building high-performance and scalable applications. With over two years of experience, I have contributed to a variety of projects, including headless e-commerce solutions and innovative tools for client onboarding and background verification
          </p>
          <p>
            From being a Branch Representative in university to a web developer,
            I always thrive to come up with best and efficient solution.{" "}
            <b style={{ color: "white" }}>"</b> I'm currently looking for an
            opportunity to showcase my skills. I'm excited to make the leap and
            continue refining my skills with the right company{" "}
            <b style={{ color: "white" }}>"</b>. If you're looking for a
            developer to add to your team, I'd love to hear from you.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let' Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
