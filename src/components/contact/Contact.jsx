import React from "react";
import "./contact.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>lymanj.chan@gmail.com</h5>
            <a
              href="mailto:lymanj.chan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiFillLinkedin />
            <h4>LinkedIn</h4>
            <h5>Join My Network</h5>
            <a
              href="https://www.linkedin.com/in/lymanchanjr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Network
            </a>
          </article>
          <article className="contact_option">
            <GoLocation />
            <h4>Location</h4>
            <h5>Las Vegas, Nevada</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
