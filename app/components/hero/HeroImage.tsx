"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
     <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{
          type: "smooth",
          duration: 1,
        }}
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
      </motion.div>
    </>
  );
};

export default HeroImage;
