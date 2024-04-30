

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <article className=" flex-col lg:flex-row-reverse flex justify-center items-center sm:ml-32 sm:gap-x-16 ">
         <HeroImage />
         <HeroText />
        </article>
      </section>
    </>
  );
};

export default Hero;
