import About from "@/app/components/about/About";
import Contact from "@/app/components/contact/Contact";
import Hero from "@/app/components/hero/Hero";
import NavBar from "@/app/components/navbar/NavBar";
import Projects from "@/app/components/projects/ProjectItem";
import Slider from "@/app/components/about/SliderAbout";
import SliderProjects from "@/app/components/projects/SliderProjects";
import SliderDown from "@/app/components/tech/SliderTech";
import SlidingContact from "@/app/components/contact/SlidingContact";
import Technologies from "@/app/components/tech/Technologies";

import projects from "./components/projects/project-data";


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Slider />
      <About />
      <SliderDown />
      <Technologies />
      <SliderProjects />
      {projects.map((item) => (
        <Projects
          id={item.id}
          key={item.id}
          image={item.image}
          alt={item.alt}
          title={item.title}
          techstack={item.techstack}
          description={item.description}
          github={item.github}
          site={item.site}
        />
        
      ))}
      <SlidingContact />
      <Contact />
    </>
  );
}
