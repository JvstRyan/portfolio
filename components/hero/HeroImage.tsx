"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
     <div
     className="ml-10 sm:ml-0"
      >
      <Image
        src="/heroo.svg"
        id="hero"
        alt="3d model"
        width={600}
        height={500}
        style={{ marginTop: "4rem" }}
        draggable={false}
      />
      </div>
    </>
  );
};

export default HeroImage;
