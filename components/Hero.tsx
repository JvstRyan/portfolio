import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";


const Hero = () => {
  return (
    <>
      <section className="hero min-h-screen">
        <article className="hero-content flex-col lg:flex-row-reverse flex justify-center items-center sm:ml-28 sm:gap-16 ">
          <Image
            src="/3d.svg"
            alt="3d model"
            width={600}
            height={500}
            style={{ marginTop: "4rem" }}
          />
          <article className="sm:mt-16 flex flex-col items-center justify-center">
            <h1 className=" text-4xl sm:text-6xl text-center sm:text-left sm:w-full text-black font-bold">
              Passionate <br></br>
              <span className="text-primary">Frontend Developer</span> <br></br>
              Ready to Elevate <br></br>
              <span className="text-secondary">Your Projects</span>
            </h1>
            <article className="flex flex-col items-center sm:items-start justify-center sm:w-full">
            <p className="py-6 sm:w-full text-black text-sm text-center sm:text-left sm:text-base ">
              a <b>Frontend Developer & UX Designer based</b> in NL <br></br>
              Specialized in Frontend Development, Designing <br></br>
              and watching Anime.
            </p>
            <a href='#contact'>
            <button className="btn btn-secondary text-white btn-wide   sm:w-44 ">
              Get in touch
              <BsArrowRight />
            </button>
            </a>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};

export default Hero;
