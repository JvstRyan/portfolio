import projects from "../project-data";
import ProjectLayout from "../ProjectLayout";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

function getProject(params: any) {
  const project = projects.find((project) => project.id === params.id);
  return project;
}

export default function ProjectData({ params }: any) {
  const project = getProject(params)

  if (project)
    return <ProjectLayout project={project} />
  else
    return <div>Project not found</div>
}