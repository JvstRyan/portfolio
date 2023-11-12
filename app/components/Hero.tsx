import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="hero min-h-screen 2xl:-mt-20">
        <article className="hero-content flex-col lg:flex-row-reverse md:ml-20 sm:gap-28 ">
          <Image
            src="/3d.svg"
            alt="3d model"
            width={500}
            height={500}
            style={{ marginTop: "1rem" }}
          />
          <article>
            <h1 className=" text-3xl sm:text-5xl text-center sm:text-left text-black font-bold leading-tight">
              Passionate <br></br>{" "}
              <span className="text-primary">Frontend Developer</span> <br></br>{" "}
              Ready to Elevate <br></br>
              <span className="text-secondary">Your Projects</span>
            </h1>
            <p className="py-6 text-black text-sm text-center sm:text-left sm:text-base ">
              a <b>Frontend Developer & UX Designer based</b> in NL <br></br>
              Specialized in Frontend Development, Designing <br></br>
              and watching Anime.
            </p>
            <button className="btn btn-secondary text-center text-white btn-wide sm:btn-md text-center ml-7 sm:ml-0 sm:w-40">
              Get in touch
              <BsArrowRight />
            </button>
          </article>
        </article>
      </section>
    </>
  );
};

export default Hero;
