import React from "react";
import Image from "next/image";

const ContactImage = () => {
  return (
    <>
      <article className=" flex justify-center items-center sm:-mr-20">
        <Image src="/contact.webp" alt="3d model" width={500} height={550} />
      </article>
    </>
  );
};

export default ContactImage;
