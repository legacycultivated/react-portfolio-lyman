import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle, BiMessageAltDetail } from "react-icons/bi";
import { ImBooks } from "react-icons/im";

const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <BiUserCircle />
      </a>
      <a href="#projects">
        <ImBooks />
      </a>
      <a href="#contact">
        <BiMessageAltDetail />
      </a>
    </nav>
  );
};

export default Nav;
