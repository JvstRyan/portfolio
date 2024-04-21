import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section id="about" className="flex justify-center items-cetner">
      <article className="flex gap-x-40 lg:flex-row-reverse md:ml-20 md:mr-20">
        <AboutText />
        <AboutImage />
      </article>
    </section>
  );
};

export default About;
