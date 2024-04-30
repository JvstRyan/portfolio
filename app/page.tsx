
import About from "@/components/about/About";
import Slider from "@/components/about/SliderAbout";
import Contact from "@/components/contact/Contact";
import SlidingContact from "@/components/contact/SlidingContact";
import Hero from "@/components/hero/Hero";
import NavBar from "@/components/navbar/NavBar";
import projects from "@/components/projects/project-data";
import Projects from "@/components/projects/ProjectItem";
import SliderProjects from "@/components/projects/SliderProjects";
import SliderDown from "@/components/tech/SliderTech";
import Technologies from "@/components/tech/Technologies";



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
          disabled={item.disabled}
        />
        
      ))}
      <SlidingContact />
      <Contact />
    </>
  );
}
