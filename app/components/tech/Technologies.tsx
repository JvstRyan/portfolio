import Image from "next/image";

const Technologies = () => {
  return (
    <>
      <section id="tech" className="hero min-h-screen mt-20 ">
        <article className="hero-content flex-col lg:flex-row-reverse sm:ml-16 sm:gap-28">
          <article className=" flex justify-center items-center sm:-mr-20">
            <Image
              src="/techh.svg"
              alt="3d model"
              width={500}
              height={500}
              style={{ marginLeft: "5rem", marginTop: "2rem" }}
              draggable={false}
            />
          </article>
          <article className="flex justify-center items-center flex-col gap-10 sm:w-1/3 ">
            <article className="justify-center items-center sm:flex-row md:flex lg:flex gap-2">
              <Image
                src="/tech.svg"
                alt="techstack"
                width={500}
                height={200}
                style={{ marginTop: "1rem" }}
                draggable={false}
              />
            </article>
            <p className="py6 text-black sm:text-base/[26px] selection:bg-primary">
              For my tech stack, I'm loving the <b>React ecosystem</b>. For all
              my frontend needs, I stick to Next.js, Tailwind CSS, and a
              component library of choice, such as Material-UI, Chakra UI, or
              Daisy. In addition, over the past few months, I've been dedicating
              time to learning more about backend development to gain a greater
              understanding of how the web works.
            </p>
          </article>
        </article>
      </section>
    </>
  );
};

export default Technologies;
