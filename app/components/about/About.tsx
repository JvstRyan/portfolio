import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

const About = () => {
  return (
    <section id="about" className="flex justify-center items-center">
      <article className="flex gap-x-40 flex-col lg:flex-row-reverse sm:ml-20 sm:mr-20">
        <AboutText />
        <AboutImage />
      </article>
    </section>
  );
};

export default About;
