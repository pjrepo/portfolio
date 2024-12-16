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
              I am a skilled Software Engineer with a <b style={{ color: "white" }}>strong foundation in web development</b>, specializing in building high-performance and scalable applications. With over one and half years of experience, I have contributed to a variety of projects, including headless e-commerce solutions and innovative tools for client onboarding and background verification.
          </p>
           <p>
              Notable achievements include qualifying for the UPSC Civil Services (Main) Examination, and earning top rankings in competitive exams like JEE Mains and AP EAMCET.
          </p>
          <p>
              I am passionate about solving complex problems, mentoring peers, and continuously expanding my knowledge in the tech space. When I'm not coding, I enjoy exploring innovative ideas and staying up-to-date with the latest trends in software development.
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
