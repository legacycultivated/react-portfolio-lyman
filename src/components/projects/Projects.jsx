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
    tech: "React.js, AWS, Google Cloud Platform, Jest, Enzyme, Recharts",
    github: "https://github.com/legacycultivated/meet-app",
    demo: "https://legacycultivated.github.io/meet-app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "myFlix Movie Application",
    tech: "MongoDB, Express, React.js, Node.js, HTTP & JWT Authentication",
    github: "https://github.com/legacycultivated/myFlix-client",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "PokeAPI Project",
    tech: "Javascript, jQuery, HTML, CSS - Bootstrap",
    github: "https://github.com/legacycultivated/pokedex-js-project",
    demo: " https://legacycultivated.github.io/pokedex-js-project/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TinDog Landing Page",
    tech: "HTML5, CSS - Bootstrap",
    github: "https://github.com/legacycultivated/TinDogLandingPage",
    demo: "https://legacycultivated.github.io/TinDogLandingPage/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Bootstrap Web Developer Portfolio",
    tech: "Javascript, HTML, CSS - Bootstrap",
    github: "https://github.com/MJTCdev/Portfolio",
    demo: "#",
  },
  {
    id: 6,
    image: IMG6,
    title: "Youtube App",
    tech: "TBD",
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
        {data.map(({ id, image, title, tech, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <h5>{tech}</h5>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
