"use client"
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const TechImage = () => {
  return (
    <>
      <motion.div
        className="mr-28 sm:mr-0"
        initial={{ x: 500 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        <Image
          src="/techh.svg"
          alt="3d model"
          width={550}
          height={500}
          style={{ marginLeft: "5rem", marginTop: "2rem" }}
          draggable={false}
        />
      </motion.div>
    </>
  );
};

export default TechImage;
