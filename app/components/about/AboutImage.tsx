"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const AboutImage = () => {
  return (
    <>
      <motion.div
        initial={{ x: -500 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
            duration: 1
        }}
      >
        <Image
          src="/aboutt.svg"
          alt="3d model"
          width={600}
          height={600}
          style={{ marginTop: "4rem" }}
          draggable={false}
        />
      </motion.div>
    </>
  );
};

export default AboutImage;
