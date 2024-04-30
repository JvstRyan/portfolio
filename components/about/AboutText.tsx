import AboutButton from "./AboutButton";


const AboutText = () => {
  return (
    <>
      <article
        className="flex flex-col p-5 sm:p-0 py-6 sm:mt-16 text-black max-w-lg text-sm text-left sm:text-left sm:text-base gap-5 selection:bg-primary"
      >
        <h1 className=" text-3xl sm:text-5xl text-center sm:text-left text-black font-bold leading-tight">
          WHO AM I?
        </h1>
        <p className=" leading-relaxed">
          <b> A 20-year-old student</b> currently persuing a bachelor&apos;s
          degree in Media & Design. I started developing around 2 years ago when
          I enrolled at Fontys, and I&apos;ve been having a blast ever since.
        </p>
        <p>
          Besides web development, I also have a passion for activities like
          tennis and fitness. I make an effort to stay active to balance out the
          hours behind the desk.
        </p>
        <p>
          In my free time, I enjoy gaming. Ever since I was little, I&apos;ve
          loved playing Nintendo games, so Mario Kart or any other Nintendo
          games are my favorites.
        </p>
        <p>
          Want to talk about <b> Web Development, Sports or Games?</b>
        </p>
        <div>
          <AboutButton />
        </div>
      </article>
    </>
  );
};

export default AboutText;
