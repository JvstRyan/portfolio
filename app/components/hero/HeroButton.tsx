"use client"

import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroButton = () => {
  return (
    <>
      <button
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="btn btn-secondary text-white btn-wide   sm:w-44 "
      >
        Get in touch
        <BsArrowRight />
      </button>
    </>
  );
};

export default HeroButton;
