"use client"
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
     <div
     className="ml-10 sm:ml-0"
      >
      <Image
        src="/hero.webp"
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
