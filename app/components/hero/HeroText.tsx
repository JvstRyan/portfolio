"use client"
import React from "react";
import HeroButton from "./HeroButton";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <>
      <motion.div 
        className="sm:mt-16 flex flex-col items-center justify-center"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          type: "smooth",
          duration: 1,
        }}
      >
        <h1 className=" mono text-4xl sm:text-[55px] tracking-wide sm:leading-[50px] text-center sm:text-left sm:w-full text-black font-bold">
          Passionate<br></br>
          <span className="text-primary">frontend developer</span> <br></br>
        ready to elevate <br></br>
          <span className="text-secondary">your projects.</span>
        </h1>
        <article className="flex flex-col items-center sm:items-start justify-center sm:w-full">
          <p className="py-6 sm:w-full text-black text-sm text-center sm:text-left sm:text-lg ">
            a <b>Frontend Developer & UX Designer based</b> in NL. <br></br>
            Specialized in Frontend Development and Design. <br></br>
          </p>
          <HeroButton />
        </article>
      </motion.div>
    </>
  );
};

export default HeroText;
