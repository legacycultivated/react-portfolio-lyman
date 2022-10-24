import React from "react";
import "./projects.css";
import IMG1 from "../../assets/meet-1.png";
import IMG2 from "../../assets/myFlixScreenshot.png";
import IMG3 from "../../assets/pokeApi.png";
import IMG4 from "../../assets/tindog-1.png";
import IMG5 from "../../assets/wireframe.jpg";
import IMG6 from "../../assets/code-pic.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Meet Project Application",
    github: "https://github.com/legacycultivated/meet-app",
    demo: "https://legacycultivated.github.io/meet-app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "myFlix Movie Application",
    github: "https://github.com/legacycultivated/myFlix-client",
    demo: "",
  },
  {
    id: 3,
    image: IMG3,
    title: "PokeAPI Project",
    github: "https://github.com/legacycultivated/pokedex-js-project",
    demo: " https://legacycultivated.github.io/pokedex-js-project/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TinDog Landing Page",
    github: "https://github.com/legacycultivated/TinDogLandingPage",
    demo: "https://legacycultivated.github.io/TinDogLandingPage/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Bootstrap Web Developer Portfolio",
    github: "https://github.com/MJTCdev/Portfolio",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Youtube App",
    github: "#",
    demo: "#",
  },
];

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
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="meet project" />
          </div>

          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="github.com" className="btn" target="_blank">
              Github
            </a>
            <a href="#home" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
