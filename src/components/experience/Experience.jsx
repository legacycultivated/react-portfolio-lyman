import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="current_technologies">
          <h3>Current Languages/Tech I'm Using</h3>
          <div className="experience_content"></div>

          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>HTML</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>CSS/SCSS/SASS</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>JavaScript</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>React.js</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>Redux</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>Bootstrap</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>Node.js</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>Git</h4>
          <article className="experience_details"></article>
          <BsPatchCheckFill />
          <h4>Github</h4>
        </div>
      </div>
      <div className="experience_content">
        <h3>Languages/Tech Used Previously</h3>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>SQL</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>Python</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>MongoDB</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>AWS (Lambda)</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>Google Cloud Platform</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>jQuery</h4>
        <article className="experience_details"></article>
        <BsPatchCheckFill />
        <h4>Express</h4>
      </div>
    </section>
  );
};

export default Experience;
