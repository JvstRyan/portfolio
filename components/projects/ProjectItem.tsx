import React from "react";
import Image from "next/image";
import { ProjectData } from "./project-data";

const Projects = ({
  id,
  image,
  alt,
  title,
  techstack,
  description,
  github,
  site,
  disabled
}: ProjectData) => {
  return (
    <>
      <section
        id="projects"
        className="flex justify-center items-center mt-36 mb-11"
      >
        <article className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <Image
            src={image}
            alt={alt}
            width={750}
            height={700}
            draggable={false}
            className="shadow-lg rounded-xl"
          />
          <article className="flex flex-col gap-10 sm:w-1/3 sm:-mt-32 ">
            <article className="flex flex-col items-start gap-5">
              <h1 className="text-black font-bold text-5xl">{title}</h1>
              <ul className="flex text-gray-400 gap-2 text-base">
                {techstack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <p className="text-black text-base w-86">{description}</p>
              <article className="flex gap-2 mt-3">
                <a href={github}>
                  <button className="btn btn-primary">Github</button>
                </a>
                <a href={site}>
                  <button disabled={disabled} className="btn btn-secondary btn-outline">
                    Live Site
                  </button>
                </a>
              </article>
            </article>
          </article>
        </article>
      </section>
      <div className="divider divider-neutral"></div>
    </>
  );
};

export default Projects;
