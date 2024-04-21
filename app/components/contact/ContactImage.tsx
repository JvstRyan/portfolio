import React from "react";
import Image from "next/image";

const ContactImage = () => {
  return (
    <>
      <article className=" flex justify-center items-center sm:-mr-20">
        <Image src="/contactt.svg" alt="3d model" width={550} height={550} />
      </article>
    </>
  );
};

export default ContactImage;
