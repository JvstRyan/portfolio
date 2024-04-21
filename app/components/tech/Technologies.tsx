import Image from "next/image";
import TechInfo from "./TechInfo";
import TechImage from "./TechImage";

const Technologies = () => {
  return (
    <>
      <section id="tech" className="flex justify-center items-center">
        <article className=" flex-col lg:flex-row-reverse flex justify-center items-center sm:ml-28 sm:gap-x-16">
           <TechImage />
          <article className="flex justify-center items-center flex-col gap-10 sm:w-1/3 ">
            <TechInfo />
          </article>
        </article>
      </section>
    </>
  );
};

export default Technologies;
