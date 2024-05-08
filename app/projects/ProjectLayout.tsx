import { ProjectData } from "./project-data";
import { BsGithub } from "react-icons/bs";

interface ProjectLayoutProps {
  project: ProjectData;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ project }) => {
  return (
    <section className="flex flex-col ml-[5%] mr-[5%] md:ml-[10%] md:mr-[10%] ">
      <nav className="navbar justify-between items-center mt-10 hidden md:flex">
        <h1 className="text-5xl font-bold text-black">{project.title}</h1>
        <article className="flex gap-4">
          <a href={project.site} target="_blank">
          <button className="btn btn-secondary text-white w-48">Live site</button>
          </a>
          <a href={project.github} target="">
          <button className="btn btn-secondary">
            <BsGithub color="white" fontSize="1.5rem" />
          </button>
          </a>
        </article>
      </nav>
      <article className="flex justify-center items-center mt-10 shadow-2xl">
        <video
          width="100%"
          height="100%"
          preload="none"
          autoPlay
          muted
          poster={project.image}
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </article>
      <article className="flex flex-col mt-10 md:mt-24">
        <div className="flex flex-col gap-4 text-black">
          <h2 className="font-bold text-start  text-xl md:text-4xl">
            Overview 📰
          </h2>
          <p className="text-md xl:text-xl">
            {project.overview}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-10 md:mt-24 text-black">
          <h2 className="font-bold text-start text-xl md:text-4xl">
            Lessons learned 💡
          </h2>
          <p className="text-md xl:text-xl">
            {project.learned}
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-10 md:mt-24 text-black">
          <h2 className="font-bold text-start text-xl md:text-4xl">
            Technologies 💻
          </h2>
          <p className="text-md xl:text-xl pb-20">
            {project.technologies}
          </p>
        </div>
      </article>
    </section>
  );
};

export default ProjectLayout;
