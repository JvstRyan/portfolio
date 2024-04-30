"use client"

import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AboutButton = () => {
  return (
    <>
      <button
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="btn btn-secondary sm:ml-0 text-white  sm:btn-md text-center"
      >
        Get in touch
        <BsArrowRight />
      </button>
    </>
  );
};

export default AboutButton;
