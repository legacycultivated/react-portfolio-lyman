import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Lyman Chan
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/lymanchanjr/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/legacycultivated">
          <BsGithub />
        </a>
        <a href="https://twitter.com/Fullstack_Lyman">
          <BsTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
