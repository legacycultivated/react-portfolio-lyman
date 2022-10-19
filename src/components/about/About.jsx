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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            quibusdam voluptas quis aut et mollitia id debitis sequi, nihil eius
            vitae ad ipsam vero repellendus architecto aperiam nostrum neque
            optio.
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
