import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/star-gaze.jpg";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Lyman Chan</h1>
        <Typewriter
          className="text-light typed"
          options={{
            strings: ["Fullstack Developer", "Freelancer", "Registered Nurse"],
            autoStart: true,
            loop: true,
          }}
        />
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
