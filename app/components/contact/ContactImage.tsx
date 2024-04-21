"use client"

import React from "react";
import Image from 'next/image'
import { motion } from "framer-motion";

const ContactImage = () => {
  return (
    <>
      <motion.div 
      className=" flex justify-center items-center sm:-mr-20"
      initial={{ x: 500 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{
          duration: 1
      }}
      >
        <Image src="/contactt.svg" alt="3d model" width={550} height={550} />
      </motion.div>
    </>
  );
};

export default ContactImage;
