import React from "react";
import "./about.css";
import ME from "../../assets/Avatar.svg";
import { BsTrophyFill, BsInfoCircleFill, BsFolderFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsTrophyFill className="about_icon" />
              <h5>Experience</h5>
              <small>Junior Developer</small>
            </article>
            <article className="about_card">
              <BsFolderFill className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
            <article className="about_card">
              <BsInfoCircleFill className="about_icon" />
              <h5>Blog</h5>
              <small>Hobbies and Interests</small>
            </article>
          </div>

          <p>
            Working as a Registered Nurse for over 7 years I have developed
            skills such as community engagement, empathy, time management,
            teamwork and collaboration, the importance of work ethic,
            accountability and communication. Through my professional/personal
            experience I produce applications and products that are centered on
            the needs of the clients and the goals of the company/stakeholders.
            I chose to transition into Web Development because of the many
            opportunities to learn new skills, languages, and innovative
            technologies. I have developed applications from server-side to the
            client-side components giving me the full scope of the
            responsibilities a web developer might have in the field.
          </p>
          <a href="contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
