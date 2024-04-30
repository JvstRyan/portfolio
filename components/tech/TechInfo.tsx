
import React from "react";
import Image from "next/image";

const TechInfo = () => {
  return (
    <>
        <article className="justify-center items-center p-5 sm:p-0">
          <Image
            src="/tech.png"
            alt="techstack"
            width={500}
            height={200}
            style={{ marginTop: "1rem" }}
            draggable={false}
          />
        </article>
        <p className="py6 text-black sm:text-base/[26px] max-w-5xl p-5 sm:p-0 selection:bg-primary">
          For my tech stack, I&apos;m loving the <b>React ecosystem</b>. For all
          my frontend needs, I stick to Next.js, Tailwind CSS, and a component
          library of choice, such as Material-UI, Chakra UI, or Daisy. In
          addition, over the past few months, I&apos;ve been dedicating time to
          learning more about backend development to gain a greater
          understanding of how the web works.
        </p>
    </>
  );
};

export default TechInfo;
