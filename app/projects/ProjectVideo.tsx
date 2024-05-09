"use client";

import React, { useState } from "react";
import { ProjectData } from "./project-data";

interface Props {
  project: ProjectData;
}

const ProjectVideo = ({ project }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <span className=" bg-black absolute top-1/2 left-1/2 -translate-x-1/2 loading loading-spinner loading-lg"></span>
      )}
      <video
        width="100%"
        height="100%"
        preload="none"
        autoPlay
        muted
        onPlay={() => setIsLoading(false)}
      >
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default ProjectVideo;
