"use client";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

const NavBarButtons = () => {
  return (
    <>
      <ul className=" text-md mr-10 gap-10 flex font-bold text-black">
        <button
          className="hidden lg:block"
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </button>
        <button
          className="hidden lg:block"
          onClick={() =>
            document
              .querySelector("#tech")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Technologies
        </button>
        <button
          className="hidden lg:block"
          onClick={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </button>
        <button
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className=" hidden md:flex btn btn-secondary text-white font-bold text-xs"
        >
          Contact
          <BsArrowRight />
        </button>
        <article className="flex gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/ryan-horrmann-1b30b1255/"
            className=" "
          >
            <li>
              <ImLinkedin color="black" fontSize="1.5rem" />
            </li>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JvstRyan?tab=repositories"
            className=""
          >
            <li>
              <BsGithub color="black" fontSize="1.5rem" />
            </li>
          </a>
        </article>
      </ul>
    </>
  );
};

export default NavBarButtons;
