import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

const ProjectNav = () => {
  return (
    <>
      <section className="navbar top-0 sticky bg-primary opacity-90 z-10 ">
        <article className="flex-1">
          <Link href="/">
          <p className="text-black text-lg font-bold ml-10">Ryanhorrmann.</p>
          </Link>
        </article>
        <article className="flex gap-3 mr-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ryan-horrmann-1b30b1255/"
            className=" "
          >
            <button>
              <ImLinkedin color="black" fontSize="1.5rem" />
            </button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JvstRyan"
            className=""
          >
            <button>
              <BsGithub color="black" fontSize="1.5rem" />
            </button>
          </a>
        </article>
      </section>
    </>
  );
};

export default ProjectNav;
