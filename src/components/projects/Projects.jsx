import React from "react";
import "./projects.css";
import IMG1 from "../../assets/meet-1.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <a href="github.com" className="btn" target="_blank">
            Github
          </a>
          <a href="#home" className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Projects;
