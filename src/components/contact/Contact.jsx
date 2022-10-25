import React from "react";
import "./contact.css";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useRef } from "react";
import emailjs, { send } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnv6nhi",
        "template_4bsaldo",
        form.current,
        "YiY3gfYCv2cSRz5Ff"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
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
            <AiFillLinkedin className="contact_option-icon" />
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
            <GoLocation className="contact_option-icon" />
            <h4>Location</h4>
            <h5>Las Vegas, Nevada</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
