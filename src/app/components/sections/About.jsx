import React from "react";
import LeftAboutComponent from "../common/LeftAboutComponent";
import RightAboutComponent from "../common/RightAboutComponent";
import "./About.css";

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <LeftAboutComponent />
          <RightAboutComponent />
        </div>
      </div>
    </section>
  );
}

export default About;
