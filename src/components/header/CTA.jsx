import React from "react";
import LC_Resume from "../../assets/LC_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={LC_Resume} download className="btn">
        Download Resume
      </a>
      <a href="#Contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
